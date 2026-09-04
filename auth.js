(function () {
  const USERNAME = "PHIDOM";
  const PASSWORD = "mayopm";
  const SESSION_KEY = "phi_press_training_auth";
  const params = new URLSearchParams(window.location.search);
  const isLocalPreview = params.get("preview") === "1" &&
    (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost" || window.location.protocol === "file:");

  if (isLocalPreview) {
    enablePreviewMode();
    return;
  }

  if (sessionStorage.getItem(SESSION_KEY) === "ok") return;

  document.documentElement.classList.add("auth-locked");

  function buildLogin() {
    const overlay = document.createElement("div");
    overlay.className = "auth-gate";
    overlay.innerHTML = `
      <form class="auth-card" autocomplete="off">
        <p class="eyebrow">Internal Training Access</p>
        <h1>PHI Press Release Training</h1>
        <p class="auth-note">Enter the training access code supplied by your facilitator. This demonstration gate is not a substitute for server-side access control.</p>
        <label>
          Username
          <input name="username" type="text" autocomplete="username" required>
        </label>
        <label>
          Password
          <input name="password" type="password" autocomplete="current-password" required>
        </label>
        <button class="primary-button" type="submit">Enter training site</button>
        <p class="auth-error" role="alert" aria-live="polite"></p>
      </form>
    `;

    document.body.appendChild(overlay);
    const form = overlay.querySelector("form");
    const error = overlay.querySelector(".auth-error");
    const usernameInput = overlay.querySelector("input[name='username']");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const username = String(formData.get("username") || "").trim();
      const password = String(formData.get("password") || "");

      if (username === USERNAME && password === PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, "ok");
        document.documentElement.classList.remove("auth-locked");
        overlay.remove();
        return;
      }

      error.textContent = "Incorrect username or password.";
      form.querySelector("input[name='password']").value = "";
    });

    usernameInput.focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildLogin, { once: true });
  } else {
    buildLogin();
  }

  function enablePreviewMode() {
    const preparePreview = () => {
      document.documentElement.classList.add("preview-mode");

      const banner = document.createElement("div");
      banner.className = "preview-banner";
      banner.setAttribute("role", "status");
      banner.innerHTML = '<strong>Preview mode</strong><span>Local review only · authentication bypassed</span><a href="index.html" data-exit-preview>Exit preview</a>';
      document.body.prepend(banner);

      document.querySelectorAll('a[href]').forEach((link) => {
        const rawHref = link.getAttribute("href");
        if (!rawHref || link.hasAttribute("data-exit-preview") || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("http")) return;
        const url = new URL(rawHref, window.location.href);
        if (url.origin !== window.location.origin && window.location.protocol !== "file:") return;
        url.searchParams.set("preview", "1");
        link.href = url.href;
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", preparePreview, { once: true });
    } else {
      preparePreview();
    }
  }
})();
