# Risk Communication Drill Library

An English-language practice library for high-pressure public health briefings. Learners review a case packet, select a reporter, answer by keyboard or microphone, and receive structured feedback based on Crisis and Emergency Risk Communication (CERC) principles.

## Included drills

- **Apple Grove:** A multi-hazard response involving a hepatitis A exposure, wildfire smoke, a boil water advisory, protest activity, privacy concerns, and misinformation.
- **Prairie Lantern County:** An MDR-TB response involving screening, language access, stigma, provider readiness, community partnership, and long-term follow-up.

The scenarios are fictional training exercises. They do not replace current clinical guidance, jurisdiction-specific protocols, or advice from qualified public health professionals.

## Start the library

### Recommended: local server

1. Install a current version of Node.js.
2. Double-click `Start-Risk-Communication-Drills.cmd`, or run `node server.mjs` in this folder.
3. Open `http://127.0.0.1:8080/`.

For a quick local review without the demonstration login gate, double-click `Preview-Risk-Communication-Drills.cmd`. Preview mode is restricted to `localhost`, `127.0.0.1`, and directly opened local files. A visible banner remains on screen while preview mode is active.

The local server gives the browser a stable origin, which improves microphone permission handling. You can also open `index.html` directly; navigation and local scoring work, but microphone behavior may vary by browser.

## Feedback modes

- **Local CERC score:** Works offline in both drills. It evaluates empathy, accuracy, action guidance, transparency, respect and privacy, relevance, and message discipline.
- **Intelligent-agent feedback:** Available for the Apple Grove drill when the server has Dify environment variables configured.

Configure agent feedback in PowerShell before starting the local server:

```powershell
$env:DIFY_CHAT_URL = "http://your-dify-host/v1/chat-messages"
$env:DIFY_API_KEY = "your-api-key"
node server.mjs
```

Do not commit API keys to source control or place them in browser-side JavaScript.

## Training access gate

`auth.js` contains a lightweight demonstration gate for facilitated testing. Because its credentials are visible in browser source, it is not real authentication. For private or production deployment, enforce access at the hosting or identity-provider layer and remove the client-side gate if it is unnecessary.

## Deployment notes

The package includes Netlify routing and security-header examples. Before public deployment:

1. Replace the demonstration access approach with server-side authentication.
2. Configure secrets in the host's environment settings.
3. Confirm that microphone permissions and all routes work over HTTPS.
4. Review scenario facts against current guidance and local policy.

## Learner workflow

1. Review the situation map, timeline, and action priorities.
2. Enter the simulated press briefing and select a reporter.
3. Give one to three clear key messages with no more than three supporting details per message.
4. Score the response and review strengths, improvement priorities, and suggested answer points.
5. Download or prepare an email record when that option is available.

Chrome generally provides the most consistent Web Speech Recognition support. Keyboard input remains available in all modern browsers.
