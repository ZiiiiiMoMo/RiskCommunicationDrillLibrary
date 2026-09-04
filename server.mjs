import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";

const ROOT_DIRECTORY = resolve(fileURLToPath(new URL(".", import.meta.url)));
const APP_PORT = Number.parseInt(process.env.PORT || process.env.APP_PORT || "8080", 10);
const DIFY_CHAT_URL = process.env.DIFY_CHAT_URL || "";
const DIFY_API_KEY = process.env.DIFY_API_KEY || "";

const ROUTES = new Map([
  ["/", "/index.html"],
  ["/index", "/index.html"],
  ["/case1", "/case1.html"],
  ["/case2", "/case2.html"],
  ["/simulator", "/simulator.html"],
  ["/mdrtb-simulator", "/mdrtb-simulator.html"],
]);

const CONTENT_TYPES = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mp3", "audio/mpeg"],
  [".mp4", "video/mp4"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
]);

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

    if (request.method === "POST" && url.pathname === "/api/dify-chat") {
      await proxyDifyRequest(request, response);
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/agent-status") {
      sendJson(response, 200, { configured: Boolean(DIFY_CHAT_URL && DIFY_API_KEY) });
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      sendJson(response, 405, { message: "Method not allowed." });
      return;
    }

    await serveStaticFile(request, response, ROUTES.get(url.pathname) || url.pathname);
  } catch {
    sendJson(response, 500, { message: "Local server error." });
  }
}).listen(APP_PORT, "0.0.0.0", () => {
  console.log(`Risk Communication Drill Library: http://127.0.0.1:${APP_PORT}/`);
});

async function proxyDifyRequest(request, response) {
  if (!DIFY_CHAT_URL || !DIFY_API_KEY) {
    sendJson(response, 503, {
      message: "Intelligent-agent feedback is not configured. Your local CERC score is still available.",
    });
    return;
  }
  let body;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    sendJson(response, error.statusCode || 400, { message: error.message });
    return;
  }

  const query = typeof body.query === "string" ? body.query.trim() : "";
  const user = typeof body.user === "string" ? body.user.trim() : "";
  if (!query || !user) {
    sendJson(response, 400, { message: "Both query and user are required." });
    return;
  }

  let upstream;
  try {
    upstream = await fetch(DIFY_CHAT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${DIFY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: {},
        query,
        response_mode: "streaming",
        conversation_id: "",
        user,
      }),
    });
  } catch {
    sendJson(response, 502, { message: "Unable to connect to the Dify service." });
    return;
  }

  response.writeHead(upstream.status, {
    "Cache-Control": "no-cache, no-store",
    "Content-Type": upstream.headers.get("content-type") || "text/event-stream; charset=utf-8",
  });

  if (!upstream.body) {
    response.end();
    return;
  }

  Readable.fromWeb(upstream.body).pipe(response);
}

async function serveStaticFile(request, response, pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    sendJson(response, 400, { message: "Invalid path." });
    return;
  }

  const filePath = resolve(ROOT_DIRECTORY, `.${decodedPath}`);
  if (filePath !== ROOT_DIRECTORY && !filePath.startsWith(`${ROOT_DIRECTORY}${sep}`)) {
    sendJson(response, 403, { message: "Forbidden." });
    return;
  }

  let fileInfo;
  try {
    fileInfo = await stat(filePath);
  } catch {
    sendJson(response, 404, { message: "File not found." });
    return;
  }

  if (!fileInfo.isFile()) {
    sendJson(response, 404, { message: "File not found." });
    return;
  }

  const contentType = CONTENT_TYPES.get(extname(filePath).toLowerCase()) || "application/octet-stream";
  const range = parseRange(request.headers.range, fileInfo.size);
  const headers = {
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-cache",
    "Content-Type": contentType,
  };

  if (range === null && request.headers.range) {
    response.writeHead(416, { ...headers, "Content-Range": `bytes */${fileInfo.size}` });
    response.end();
    return;
  }

  if (range) {
    headers["Content-Length"] = String(range.end - range.start + 1);
    headers["Content-Range"] = `bytes ${range.start}-${range.end}/${fileInfo.size}`;
    response.writeHead(206, headers);
  } else {
    headers["Content-Length"] = String(fileInfo.size);
    response.writeHead(200, headers);
  }

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath, range || undefined).pipe(response);
}

function parseRange(rangeHeader, fileSize) {
  if (!rangeHeader) return undefined;
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!match) return null;

  let start = match[1] ? Number.parseInt(match[1], 10) : undefined;
  let end = match[2] ? Number.parseInt(match[2], 10) : undefined;

  if (start === undefined) {
    const suffixLength = end;
    if (!suffixLength) return null;
    start = Math.max(0, fileSize - suffixLength);
    end = fileSize - 1;
  } else {
    end = end === undefined ? fileSize - 1 : Math.min(end, fileSize - 1);
  }

  if (start < 0 || start >= fileSize || end < start) return null;
  return { start, end };
}

async function readJsonBody(request) {
  const chunks = [];
  let byteLength = 0;

  for await (const chunk of request) {
    byteLength += chunk.length;
    if (byteLength > 1_000_000) {
      const error = new Error("Request body is too large.");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new Error("The request body must be valid JSON.");
  }
}

function sendJson(response, statusCode, body) {
  if (response.headersSent) {
    response.end();
    return;
  }

  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}
