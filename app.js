const reporters = [
  {
    name: "Aisha Johnson",
    outlet: "Twin Cities Ledger, city desk",
    style: "skeptical and precise",
    voiceGender: "female",
    accent: "Midwestern American",
    voiceHints: ["jenny", "aria", "zira", "samantha"],
    voiceRate: 1.0,
    voicePitch: 1.08,
  },
  {
    name: "Daniel Kim",
    outlet: "Channel 7 Live",
    style: "fast, camera-ready, confrontational",
    voiceGender: "male",
    accent: "General American",
    voiceHints: ["guy", "david", "brian", "daniel"],
    voiceRate: 1.07,
    voicePitch: .86,
  },
  {
    name: "Renee Ortiz",
    outlet: "North Star Investigates",
    style: "accountability-focused",
    voiceGender: "female",
    accent: "Southwestern American",
    voiceHints: ["aria", "jenny", "maria", "zira"],
    voiceRate: .96,
    voicePitch: 1.0,
  },
  {
    name: "Priya Nair",
    outlet: "HealthWatch Minnesota",
    style: "technical but fair",
    voiceGender: "female",
    accent: "Indian American",
    voiceHints: ["neerja", "priya", "heera", "asha", "aria"],
    voiceRate: 1.03,
    voicePitch: 1.13,
  },
  {
    name: "Jon Fletcher",
    outlet: "Apple Grove Public Radio",
    style: "local and practical",
    voiceGender: "male",
    accent: "Upper Midwest American",
    voiceHints: ["guy", "david", "mark", "daniel"],
    voiceRate: .93,
    voicePitch: .78,
  },
  {
    name: "Elena Brooks",
    outlet: "Upper Midwest News Service",
    style: "statewide implications",
    voiceGender: "female",
    accent: "Southern American",
    voiceHints: ["jenny", "susan", "samantha", "aria"],
    voiceRate: .91,
    voicePitch: 1.04,
  },
  {
    name: "Frank Malloy",
    outlet: "Capitol Wire",
    style: "political pressure",
    voiceGender: "male",
    accent: "Northeastern American",
    voiceHints: ["david", "guy", "brian", "daniel"],
    voiceRate: 1.1,
    voicePitch: .74,
  },
  {
    name: "Drew Kaplan",
    outlet: "The Dispatch Stream",
    style: "online rumor and culture-war framing",
    voiceGender: "male",
    accent: "West Coast American",
    voiceHints: ["guy", "alex", "david", "mark"],
    voiceRate: 1.14,
    voicePitch: .92,
  },
];

const questions = [
  {
    topic: "Delayed notification",
    text: "You knew last week that food workers at Rob's Roadside Restaurant might have exposed people to Hepatitis A(1c). Why is the public only hearing clear instructions now, after hundreds of tournament families may already have gone home?",
    focus: ["delay", "notify", "tournament", "families", "instructions"],
    model: [
      "Acknowledge the fear and frustration about timing.",
      "State what changed: the child exposure link and family symptoms made a mass immune globulin clinic feasible and urgent.",
      "Give immediate actions: who should attend, dates, location, hotline.",
      "Avoid blaming individuals or speculating beyond confirmed facts.",
    ],
  },
  {
    topic: "Exposure window contradiction",
    text: "Your release says people who ate at the restaurant from April 26 through May 17 may have been exposed, but the clinic is only for May 3 through May 16. Isn't that contradictory, and are you abandoning people who ate earlier?",
    focus: ["april 26", "may 17", "may 3", "may 16", "14 days", "immune globulin"],
    model: [
      "Explain that exposure and eligibility are different concepts.",
      "Say immune globulin works best within 14 days after exposure.",
      "Tell earlier diners to watch for symptoms and seek medical care if symptoms occur.",
      "Give the hotline for individual questions.",
    ],
  },
  {
    topic: "Child risk",
    text: "This strain hits children harder. How many children are infected, and can you guarantee no child from the baseball and softball tournaments is going to die?",
    focus: ["children", "strain", "symptoms", "severe", "guarantee"],
    model: [
      "Show empathy for parents without making guarantees.",
      "Describe Hep A(1c) as a strain that can be more acute in children.",
      "Share only confirmed counts and say investigation is ongoing.",
      "Name symptoms and urge medical care for concerning symptoms.",
    ],
  },
  {
    topic: "Privacy and immigration",
    text: "The identity of one food worker, an undocumented immigrant from Guatemala, is all over social media. Did your department fail to protect privacy, and should residents be worried about undocumented workers handling food?",
    focus: ["privacy", "identity", "undocumented", "guatemala", "stigma", "workers"],
    model: [
      "Condemn harassment and avoid linking disease risk to immigration status.",
      "Say the department did not release identifying information and protects privacy.",
      "Refocus on exposure, symptoms, hand hygiene, and clinic guidance.",
      "Invite anyone with symptoms to seek care regardless of immigration status.",
    ],
  },
  {
    topic: "Misinformation",
    text: "Protesters say this clinic is giving children an unsafe mRNA vaccine with tracking chips that could damage DNA. Is that false, and why should skeptical parents believe you?",
    focus: ["immune globulin", "not mrna", "tracking", "dna", "parents", "trust"],
    model: [
      "Clearly correct the false claim: immune globulin is not an mRNA vaccine and contains no tracking chips.",
      "Use plain language about what immune globulin does.",
      "Respect worried parents and point them to clinicians or the hotline.",
      "Avoid mocking protesters or repeating the myth without correction.",
    ],
  },
  {
    topic: "Clinic safety",
    text: "You are asking families to come to the fairgrounds while wildfire smoke, protests, road detours, and a boil water advisory are all happening. Is this clinic actually safe enough to open?",
    focus: ["clinic", "safe", "wildfire", "smoke", "protest", "boil water", "detours"],
    model: [
      "Acknowledge the layered risks and explain safety is being reassessed continuously.",
      "Mention coordination with fire, law enforcement, MnDOT, water utility, and state partners.",
      "Explain clean water, handwashing, detours, and contingency location planning.",
      "Give clear instructions for people with heart or lung disease and families seeking immune globulin.",
    ],
  },
  {
    topic: "Water advisory",
    text: "The water pressure dropped because firefighters were pumping so much water. Should residents trust anything city officials are saying about water safety right now?",
    focus: ["boil water", "pressure", "firefighters", "water safety", "trust"],
    model: [
      "Explain the reason for the advisory in plain language.",
      "Tell residents to boil water before drinking or food preparation until the advisory is lifted.",
      "Say testing is underway and updates will be issued when water is confirmed safe.",
      "Avoid minimizing the inconvenience or uncertainty.",
    ],
  },
  {
    topic: "Wildfire death",
    text: "An elderly resident with COPD and heart disease died from smoke inhalation. Did public health fail to warn vulnerable residents quickly enough?",
    focus: ["smoke", "elderly", "copd", "heart disease", "warning", "vulnerable"],
    model: [
      "Express condolences first.",
      "Reinforce protective guidance: stay indoors, reduce smoke exposure, seek care for breathing trouble.",
      "Avoid discussing private medical details beyond what is authorized.",
      "Explain how warnings are being distributed through multiple channels.",
    ],
  },
  {
    topic: "Restaurant accountability",
    text: "Was Rob's Roadside Restaurant allowed to close voluntarily because it is popular locally? Why did you not shut it down immediately if workers were infectious?",
    focus: ["restaurant", "close", "voluntary", "infectious", "accountability", "inspection"],
    model: [
      "Say the restaurant agreed to close as a precaution and the investigation continues.",
      "Avoid implying guilt before facts are complete.",
      "Explain food safety steps: sanitation, employee exclusion, hand hygiene, inspection coordination.",
      "Keep the public action message central.",
    ],
  },
  {
    topic: "Supply and equity",
    text: "Do you actually have enough immune globulin, staff, and transportation for everyone who needs it, including people without cars or people afraid to show up because of immigration enforcement?",
    focus: ["enough", "immune globulin", "staff", "transportation", "equity", "immigration"],
    model: [
      "State what is known about supply and partners helping staff the clinic.",
      "Identify equity barriers such as transportation, language, disability, and immigration fear.",
      "Commit to updates and practical access support.",
      "Say care and public health services are based on exposure risk, not immigration status.",
    ],
  },
  {
    topic: "Multistate exposure",
    text: "Teams came from South Dakota and across Minnesota. How can you claim this is under control if exposed families are already scattered across multiple states?",
    focus: ["south dakota", "minnesota", "multistate", "teams", "schools", "notify"],
    model: [
      "Acknowledge the multistate challenge.",
      "Mention coordination with MDH, schools, tournament organizers, neighboring health departments, and providers.",
      "Focus on rapid notification and the hotline.",
      "Avoid saying the situation is fully under control.",
    ],
  },
  {
    topic: "HIPAA pressure",
    text: "Can you tell us the age, school, and town of the child who tested positive so parents can know whether their own child was nearby?",
    focus: ["privacy", "hipaa", "child", "school", "nearby", "parents"],
    model: [
      "Protect the child's privacy and avoid identifying details.",
      "Explain that exposure guidance is based on restaurant dates and public health investigation, not naming a child.",
      "Give parents concrete steps for assessing exposure and symptoms.",
      "Use a respectful tone toward anxious parents.",
    ],
  },
  {
    topic: "Public trust",
    text: "Between the outbreak, the fire, the boil water notice, and the protests, this looks like a city losing control. Why should anyone trust your department's instructions today?",
    focus: ["trust", "control", "outbreak", "fire", "water", "protests", "instructions"],
    model: [
      "Acknowledge that the situation feels overwhelming.",
      "Name the coordinated response partners and what each is doing.",
      "Be transparent about uncertainty and what will trigger updates.",
      "Give a short, prioritized action list for residents.",
    ],
  },
  {
    topic: "Symptoms and medical care",
    text: "For a parent listening right now, what symptoms should make them call a doctor today, and what should they not waste time worrying about?",
    focus: ["symptoms", "doctor", "jaundice", "fever", "vomiting", "abdominal", "dark urine"],
    model: [
      "Give plain-language symptoms: fever, fatigue, nausea, abdominal pain, vomiting, dark urine, jaundice.",
      "Tell people with severe symptoms or dehydration to seek medical care.",
      "Connect symptoms to exposure dates without creating panic.",
      "Give the hotline for questions.",
    ],
  },
  {
    topic: "Costs",
    text: "Who is paying for this clinic and for people who miss work to get immune globulin? Is the taxpayer covering a restaurant's mistake?",
    focus: ["cost", "paying", "taxpayer", "work", "clinic", "restaurant"],
    model: [
      "Do not speculate about blame or liability.",
      "Focus on the public health goal: preventing illness.",
      "Say cost/access details will be communicated clearly as confirmed.",
      "Encourage exposed people to attend and call the hotline if cost or access is a barrier.",
    ],
  },
];

const rubric = [
  { key: "empathy", label: "Empathy", max: 15 },
  { key: "accuracy", label: "Accuracy", max: 18 },
  { key: "action", label: "Action", max: 17 },
  { key: "transparency", label: "Transparency", max: 12 },
  { key: "respect", label: "Respect", max: 10 },
  { key: "relevance", label: "Relevance", max: 13 },
  { key: "messageDiscipline", label: "Message Discipline", max: 15 },
];

const facts = [
  "hepatitis a",
  "hep a",
  "immune globulin",
  "14 days",
  "may 3",
  "may 16",
  "april 26",
  "may 17",
  "4-h",
  "fairgrounds",
  "noon",
  "8 pm",
  "9 am",
  "5 pm",
  "hotline",
  "800",
  "657",
  "3903",
  "651",
  "201",
  "3920",
  "boil water",
  "wildfire",
  "smoke",
  "not mrna",
  "tracking chips",
  "hand hygiene",
  "symptoms",
  "jaundice",
  "dark urine",
];

const empathyTerms = [
  "understand",
  "concern",
  "worried",
  "fear",
  "frustrat",
  "sorry",
  "condolence",
  "families",
  "parents",
  "community",
];

const actionTerms = [
  "call",
  "hotline",
  "clinic",
  "come",
  "attend",
  "boil",
  "stay indoors",
  "seek medical",
  "doctor",
  "wash",
  "hand",
  "symptoms",
  "updates",
  "detour",
  "transport",
];

const transparencyTerms = [
  "what we know",
  "what we do not know",
  "we don't know",
  "investigation",
  "confirmed",
  "as we learn",
  "update",
  "based on",
  "cannot confirm",
  "will share",
];

const respectTerms = [
  "privacy",
  "respect",
  "regardless",
  "immigration status",
  "not release",
  "confidential",
  "do not stigmatize",
  "stigma",
  "language",
  "access",
  "equity",
];

const riskyPhrases = [
  "no risk",
  "zero risk",
  "guarantee",
  "nothing to worry",
  "everyone is safe",
  "illegal immigrants caused",
  "they caused",
  "tracking chips are real",
  "do not boil",
  "ignore symptoms",
  "we know everything",
];

let currentQuestion = null;
let currentReporter = null;
let questionQueue = shuffle([...questions.keys()]);
let recognition = null;
let isRecording = false;
let shouldKeepRecording = false;
let recognitionRestartTimer = null;
let dictationBaseText = "";
let dictationCommittedText = "";
let currentFinalTranscript = "";
let currentFinalSegments = [];
let currentInterimTranscript = "";
let recognitionStartedAt = 0;
let lastRecognitionResultAt = 0;
let difyRequestPending = false;
let delayedQuestionTimer = null;
let questionSpeechFinished = false;

const reporterName = document.querySelector("#reporterName");
const reporterOutlet = document.querySelector("#reporterOutlet");
const questionText = document.querySelector("#questionText");
const answerInput = document.querySelector("#answerInput");
const answerCount = document.querySelector("#answerCount");
const scoreButton = document.querySelector("#scoreButton");
const clearButton = document.querySelector("#clearButton");
const micButton = document.querySelector("#micButton");
const speechHint = document.querySelector("#speechHint");
const replayButton = document.querySelector("#replayButton");
const randomReporterButton = document.querySelector("#randomReporterButton");
const difyResponsePanel = document.querySelector("#difyResponsePanel");
const difyResponseStatus = document.querySelector("#difyResponseStatus");
const difyResponseContent = document.querySelector("#difyResponseContent");
const scorePanel = document.querySelector("#scorePanel");
const scoreTemplate = document.querySelector("#scoreTemplate");
const hotspots = [...document.querySelectorAll(".reporter-hotspot")];
const standees = [...document.querySelectorAll(".standee")];
const flashLayer = document.querySelector(".flash-layer");
const reporterSelectionVideo = document.querySelector("#reporterSelectionVideo");
const idlePressRoomVideo = document.querySelector(".press-room > video:first-child");

reporterSelectionVideo?.addEventListener("ended", () => {
  if (questionSpeechFinished) finishReporterVideo();
});

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    const reporterIndex = Number(hotspot.dataset.reporter);
    callOnReporter(reporterIndex);
  });
});

randomReporterButton.addEventListener("click", () => {
  callOnReporter(Math.floor(Math.random() * reporters.length));
});

replayButton.addEventListener("click", () => {
  if (currentQuestion) speak(currentQuestion.text);
});

answerInput.addEventListener("input", () => {
  updateAnswerCount();
  scoreButton.disabled = difyRequestPending || !currentQuestion || answerInput.value.trim().length < 20;
});

scoreButton.addEventListener("click", async () => {
  if (!currentQuestion) return;
  const answer = answerInput.value.trim();
  renderScore(evaluateAnswer(answer, currentQuestion));
  await requestDifyFeedback(answer);
});

clearButton.addEventListener("click", () => {
  answerInput.value = "";
  updateAnswerCount();
  scoreButton.disabled = true;
  difyResponseStatus.textContent = "Submit your answer to receive feedback from the intelligent agent.";
  difyResponseStatus.classList.remove("error");
  difyResponseContent.textContent = "";
  answerInput.focus();
});

micButton.addEventListener("click", () => {
  if (!recognition) {
    speechHint.textContent = "Speech recognition is not available in this browser. Please type your answer.";
    return;
  }

  if (isRecording || shouldKeepRecording) {
    stopDictation();
    return;
  }

  beginDictation();
});

setupSpeechRecognition();
positionPhotoStandees();
scheduleCameraFlash();
updateAnswerCount();
resetReporterSelectionUI();
checkAgentConfiguration();
window.addEventListener("pageshow", (event) => {
  if (event.persisted) resetReporterSelectionUI();
});

function updateAnswerCount() {
  if (!answerCount) return;
  const count = answerInput.value.trim() ? answerInput.value.trim().split(/\s+/).length : 0;
  answerCount.textContent = `${count} ${count === 1 ? "word" : "words"}`;
}

async function checkAgentConfiguration() {
  if (!difyResponseStatus) return;
  try {
    const response = await fetch("./api/agent-status", { cache: "no-store" });
    if (!response.ok) throw new Error();
    const status = await response.json();
    difyResponseStatus.textContent = status.configured
      ? "Agent service ready. Select a reporter, enter at least 20 characters, then score your answer."
      : "Agent service is not configured. Local CERC scoring remains available.";
    difyResponseStatus.classList.toggle("error", !status.configured);
  } catch {
    difyResponseStatus.textContent = "Agent connection status is unavailable. Local CERC scoring remains available.";
    difyResponseStatus.classList.add("error");
  }
}

function resetReporterSelectionUI() {
  if (delayedQuestionTimer) {
    window.clearTimeout(delayedQuestionTimer);
    delayedQuestionTimer = null;
  }
  hotspots.forEach((hotspot) => hotspot.classList.remove("active", "label-hidden"));
  standees.forEach((standee) => standee.classList.remove("active"));
  if (reporterSelectionVideo) {
    reporterSelectionVideo.pause();
    reporterSelectionVideo.playbackRate = 1;
    reporterSelectionVideo.currentTime = 0;
    reporterSelectionVideo.classList.remove("active");
  }
}

function callOnReporter(reporterIndex) {
  currentReporter = reporters[reporterIndex];
  currentQuestion = nextQuestion();

  hotspots.forEach((hotspot) => hotspot.classList.toggle("active", Number(hotspot.dataset.reporter) === reporterIndex));
  hotspots.forEach((hotspot) => hotspot.classList.remove("label-hidden"));
  const activeHotspot = hotspots.find((hotspot) => hotspot.classList.contains("active"));
  activeHotspot?.classList.add("label-hidden");
  standees.forEach((standee) => standee.classList.remove("active"));

  reporterName.textContent = currentReporter.name;
  reporterOutlet.textContent = `${currentReporter.outlet} - ${currentReporter.style}; ${currentReporter.accent}`;
  questionText.textContent = `"${currentQuestion.text}"`;
  replayButton.disabled = false;
  scoreButton.disabled = difyRequestPending || answerInput.value.trim().length < 20;
  playReporterVideoThenQuestion();
}

function playReporterVideoThenQuestion() {
  if (delayedQuestionTimer) window.clearTimeout(delayedQuestionTimer);
  window.speechSynthesis?.cancel();
  questionSpeechFinished = false;

  const reporter = currentReporter;
  const question = currentQuestion;
  const spokenText = `${reporter.name}, ${reporter.outlet}. ${question.text}`;

  if (reporterSelectionVideo) {
    reporterSelectionVideo.classList.add("active");
    reporterSelectionVideo.currentTime = 0;
    matchVideoToSpeechDuration(spokenText);
    reporterSelectionVideo.play().catch(() => {
      // The delayed question still plays if the browser blocks video playback.
    });
  }

  delayedQuestionTimer = window.setTimeout(() => {
    if (reporter !== currentReporter || question !== currentQuestion) return;
    speak(spokenText, {
      onEnd: () => {
        if (reporter !== currentReporter || question !== currentQuestion) return;
        questionSpeechFinished = true;
        finishReporterVideo();
      },
    });
  }, 5000);
}

function matchVideoToSpeechDuration(text) {
  if (!reporterSelectionVideo) return;
  const applyRate = () => {
    const words = text.trim().split(/\s+/).length;
    const voiceRate = currentReporter?.voiceRate || 1;
    const estimatedSpeechSeconds = Math.max(4, words / (2.55 * voiceRate));
    const targetSeconds = 5 + estimatedSpeechSeconds;
    const naturalDuration = reporterSelectionVideo.duration;
    if (!Number.isFinite(naturalDuration) || naturalDuration <= 0) return;
    reporterSelectionVideo.playbackRate = Math.min(2, Math.max(.5, naturalDuration / targetSeconds));
  };

  if (reporterSelectionVideo.readyState >= 1) applyRate();
  else reporterSelectionVideo.addEventListener("loadedmetadata", applyRate, { once: true });
}

function finishReporterVideo() {
  if (!reporterSelectionVideo?.classList.contains("active")) return;
  reporterSelectionVideo.classList.remove("active");
  reporterSelectionVideo.pause();
  reporterSelectionVideo.playbackRate = 1;
  reporterSelectionVideo.currentTime = 0;
  if (idlePressRoomVideo) {
    idlePressRoomVideo.currentTime = 0;
    idlePressRoomVideo.play().catch(() => {
      // The poster frame remains visible if autoplay is unavailable.
    });
  }
}

async function requestDifyFeedback(query) {
  difyRequestPending = true;
  scoreButton.disabled = true;
  scoreButton.textContent = "Requesting feedback...";
  difyResponseStatus.textContent = "The intelligent agent is reviewing your answer...";
  difyResponseStatus.classList.remove("error");
  difyResponseContent.textContent = "";

  try {
    const response = await fetch("./api/dify-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, user: getDifyUserId() }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(errorBody.message || `Dify request failed (${response.status}).`);
    }

    if (!response.body) throw new Error("This browser cannot read the Dify response stream.");
    await renderDifyStream(response.body);

    if (!difyResponseContent.textContent.trim()) {
      throw new Error("The intelligent agent returned an empty response.");
    }

    difyResponseStatus.textContent = "Feedback complete.";
  } catch (error) {
    difyResponseStatus.textContent = error.message || "Unable to reach the intelligent agent. Please try again.";
    difyResponseStatus.classList.add("error");
  } finally {
    difyRequestPending = false;
    scoreButton.textContent = "Score my answer";
    scoreButton.disabled = !currentQuestion || answerInput.value.trim().length < 20;
  }
}

async function renderDifyStream(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let bufferedLine = "";
  let receivedAgentChunks = false;

  const handleLine = (line) => {
    if (!line.startsWith("data: ")) return;

    let payload;
    try {
      payload = JSON.parse(line.slice(6));
    } catch {
      return;
    }

    if (payload.event === "error") {
      throw new Error(payload.message || "The intelligent agent stopped with an error.");
    }

    if (payload.event === "agent_message") {
      receivedAgentChunks = true;
      difyResponseContent.textContent += payload.answer || "";
    } else if (payload.event === "message_replace") {
      difyResponseContent.textContent = payload.answer || difyResponseContent.textContent;
    } else if (payload.event === "message") {
      if (receivedAgentChunks) {
        difyResponseContent.textContent = payload.answer || difyResponseContent.textContent;
      } else {
        difyResponseContent.textContent += payload.answer || "";
      }
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    bufferedLine += decoder.decode(value || new Uint8Array(), { stream: !done });
    const lines = bufferedLine.split(/\r?\n/);
    bufferedLine = lines.pop() || "";
    lines.forEach(handleLine);
    if (done) break;
  }

  if (bufferedLine) handleLine(bufferedLine);
}

function getDifyUserId() {
  const storageKey = "apple-grove-dify-user";
  try {
    const storedUserId = localStorage.getItem(storageKey);
    if (isGuid(storedUserId)) return storedUserId;
  } catch {
    // Some privacy modes disable local storage; a per-page ID is sufficient in that case.
  }

  const userId = createGuid();
  try {
    localStorage.setItem(storageKey, userId);
  } catch {
    // Keep using the generated ID for this request when storage is unavailable.
  }
  return userId;
}

function isGuid(value) {
  return typeof value === "string"
    && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function createGuid() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();

  const bytes = new Uint8Array(16);
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0"));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
}

function nextQuestion() {
  if (questionQueue.length === 0) questionQueue = shuffle([...questions.keys()]);
  const nextIndex = questionQueue.shift();
  return questions[nextIndex];
}

function positionPhotoStandees() {
  standees.forEach((standee) => {
    const photo = standee.querySelector(".standee-photo");
    const cropLeft = Number.parseFloat(standee.style.getPropertyValue("--crop-left"));
    const cropTop = Number.parseFloat(standee.style.getPropertyValue("--crop-top"));
    const width = Number.parseFloat(standee.style.getPropertyValue("--w"));
    const height = Number.parseFloat(standee.style.getPropertyValue("--h"));
    if (!photo || !width || !height) return;

    photo.style.width = `${10000 / width}%`;
    photo.style.height = `${10000 / height}%`;
    photo.style.left = `${-(cropLeft * 100) / width}%`;
    photo.style.top = `${-(cropTop * 100) / height}%`;
  });
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    micButton.disabled = true;
    speechHint.textContent = "Speech recognition is not available in this browser. Keyboard input is ready.";
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.addEventListener("start", () => {
    isRecording = true;
    shouldKeepRecording = true;
    recognitionStartedAt = Date.now();
    micButton.classList.add("recording");
    micButton.textContent = "Stop mic";
    speechHint.textContent = "Listening. Speak as if you are at the podium.";
  });

  recognition.addEventListener("end", () => {
    isRecording = false;
    if (shouldKeepRecording && stoppedBeforeReceivingSpeech()) {
      shouldKeepRecording = false;
      clearTimeout(recognitionRestartTimer);
      stopRecordingUi(`Microphone stopped immediately before any speech was captured. ${microphonePermissionHelp()}`);
      return;
    }

    commitInterimTranscript();
    if (shouldKeepRecording) {
      micButton.classList.add("recording");
      micButton.textContent = "Stop mic";
      speechHint.textContent = "Still listening. The browser paused recognition, so I am reconnecting the microphone...";
      clearTimeout(recognitionRestartTimer);
      recognitionRestartTimer = setTimeout(startRecognitionSafely, 120);
      return;
    }
    stopRecordingUi("Microphone stopped. You can edit the transcript before scoring.");
  });

  recognition.addEventListener("error", (event) => {
    isRecording = false;
    if (["not-allowed", "service-not-allowed", "audio-capture"].includes(event.error)) {
      shouldKeepRecording = false;
      clearTimeout(recognitionRestartTimer);
      stopRecordingUi(`Microphone permission was blocked or unavailable in this browser. ${microphonePermissionHelp()}`);
      return;
    }

    if (shouldKeepRecording && ["no-speech", "aborted", "network"].includes(event.error)) {
      commitInterimTranscript();
      speechHint.textContent = event.error === "network"
        ? "Speech recognition service is reconnecting. Keep speaking, or type if the transcript does not appear."
        : "Still listening. Continue speaking when ready.";
      clearTimeout(recognitionRestartTimer);
      recognitionRestartTimer = setTimeout(startRecognitionSafely, 180);
      return;
    }
    shouldKeepRecording = false;
    clearTimeout(recognitionRestartTimer);
    stopRecordingUi(`Microphone error: ${event.error}. You can still type your answer.`);
  });

  recognition.addEventListener("result", (event) => {
    lastRecognitionResultAt = Date.now();
    const finalSegments = [];
    let interimText = "";

    for (let i = 0; i < event.results.length; i += 1) {
      const transcript = cleanDictationText(event.results[i][0].transcript);
      if (event.results[i].isFinal) finalSegments.push(transcript);
      else interimText += `${transcript} `;
    }

    currentFinalSegments = finalSegments.filter(Boolean);
    currentFinalTranscript = punctuateFinalSegments(currentFinalSegments, { finalize: false });
    currentInterimTranscript = cleanDictationText(interimText);
    renderDictationDraft();

    if (interimText) {
      speechHint.textContent = `Heard: ${currentInterimTranscript}`;
    } else if (currentFinalTranscript) {
      speechHint.textContent = "Listening. Your words are being added to the answer box.";
    }
  });
}

function beginDictation() {
  window.speechSynthesis?.cancel?.();
  dictationBaseText = answerInput.value.trim();
  dictationCommittedText = "";
  currentFinalTranscript = "";
  currentFinalSegments = [];
  currentInterimTranscript = "";
  recognitionStartedAt = 0;
  lastRecognitionResultAt = 0;
  shouldKeepRecording = true;
  micButton.classList.add("recording");
  micButton.textContent = "Stop mic";
  speechHint.textContent = "Starting microphone now. Speak when you are ready.";
  setTimeout(startRecognitionSafely, 0);
}

function stopDictation() {
  shouldKeepRecording = false;
  clearTimeout(recognitionRestartTimer);
  commitInterimTranscript();
  finalizeCommittedDictationText();
  try {
    recognition.stop();
  } catch (error) {
    stopRecordingUi("Microphone stopped. You can edit the transcript before scoring.");
  }
}

function startRecognitionSafely() {
  if (!recognition || isRecording || !shouldKeepRecording) return;
  try {
    recognition.start();
  } catch (error) {
    if (error.name === "InvalidStateError" && shouldKeepRecording) {
      clearTimeout(recognitionRestartTimer);
      recognitionRestartTimer = setTimeout(startRecognitionSafely, 220);
      return;
    }
    shouldKeepRecording = false;
    stopRecordingUi("Microphone could not restart. You can still type your answer.");
  }
}

function stopRecordingUi(message) {
  isRecording = false;
  micButton.classList.remove("recording");
  micButton.textContent = "Use mic";
  speechHint.textContent = message;
}

function stoppedBeforeReceivingSpeech() {
  const elapsed = Date.now() - recognitionStartedAt;
  const hasResultForThisStart = lastRecognitionResultAt >= recognitionStartedAt;
  return recognitionStartedAt > 0 && elapsed < 1500 && !hasResultForThisStart;
}

function microphonePermissionHelp() {
  const isLocalFile = window.location.protocol === "file:";
  const isLocalHost = ["127.0.0.1", "localhost", ""].includes(window.location.hostname);
  if (isLocalFile || isLocalHost) {
    return "Please allow microphone access for this site, or launch with AppleGroveSimulator-Chrome.cmd / AppleGroveSimulator-Edge.cmd.";
  }
  return "Please allow microphone access for this HTTPS site, then reload the page if the browser keeps blocking it.";
}

function commitInterimTranscript() {
  const sessionSegments = [...currentFinalSegments, currentInterimTranscript].filter(Boolean);
  const sessionText = punctuateFinalSegments(sessionSegments, { finalize: true });
  if (!sessionText) return;
  dictationCommittedText = cleanDictationText(`${dictationCommittedText} ${sessionText}`);
  currentFinalTranscript = "";
  currentFinalSegments = [];
  currentInterimTranscript = "";
  renderDictationDraft();
}

function renderDictationDraft() {
  const parts = [dictationBaseText, dictationCommittedText, currentFinalTranscript, currentInterimTranscript].map((part) => part.trim()).filter(Boolean);
  answerInput.value = parts.join(" ");
  updateAnswerCount();
  scoreButton.disabled = difyRequestPending || !currentQuestion || answerInput.value.trim().length < 20;
}

function cleanDictationText(text) {
  return text
    .replace(/\s+([,.;:?!])/g, "$1")
    .replace(/([,.;:?!])(?=\S)/g, "$1 ")
    .replace(/\s+/g, " ")
    .trim();
}

function punctuateFinalSegments(segments, options = {}) {
  const cleanedSegments = segments.map((segment) => cleanDictationText(segment)).filter(Boolean);
  if (!cleanedSegments.length) return "";

  return cleanedSegments
    .map((segment, index) => punctuateSegment(segment, {
      finalize: options.finalize || index < cleanedSegments.length - 1,
    }))
    .join(" ");
}

function punctuateSegment(segment, options = {}) {
  let text = addCommasAfterDictationLeadIns(cleanDictationText(segment));
  text = capitalizeAfterPunctuation(text);
  if (options.finalize && !/[.!?]$/.test(text)) text = `${text}.`;
  return text;
}

function addCommasAfterDictationLeadIns(text) {
  const leadIns = [
    "first",
    "second",
    "third",
    "finally",
    "however",
    "also",
    "next",
    "today",
    "right now",
    "for now",
    "at this time",
    "to be clear",
    "most importantly",
    "importantly",
    "in addition",
    "based on what we know",
  ];
  const leadInPattern = new RegExp(`(^|[.!?]\\s+)(${leadIns.join("|")})\\b(?![,.:;])`, "gi");
  return text.replace(leadInPattern, "$1$2,");
}

function capitalizeAfterPunctuation(text) {
  return text.replace(/(^|[.!?]\s+)([a-z])/g, (match, prefix, letter) => `${prefix}${letter.toUpperCase()}`);
}

function finalizeCommittedDictationText() {
  const text = cleanDictationText(dictationCommittedText);
  if (!text) return;
  dictationCommittedText = /[.!?]$/.test(text) ? text : `${text}.`;
  renderDictationDraft();
}

function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    speechHint.textContent = "Question audio is not supported in this browser.";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = .96;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = chooseReporterVoice(voices, currentReporter);
  if (preferredVoice) utterance.voice = preferredVoice;
  if (currentReporter) {
    utterance.rate = currentReporter.voiceRate;
    utterance.pitch = currentReporter.voicePitch;
  }

  utterance.addEventListener("end", () => options.onEnd?.());
  utterance.addEventListener("error", () => options.onEnd?.());

  window.speechSynthesis.speak(utterance);
}

function chooseReporterVoice(voices, reporter) {
  if (!voices.length) return null;
  const englishVoices = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
  const usableVoices = englishVoices.length ? englishVoices : voices;
  if (!reporter) return usableVoices.find((voice) => /natural|neural|online|premium/i.test(voice.name)) || usableVoices[0];
  const reporterIndex = Math.max(0, reporters.indexOf(reporter));

  const hintedVoice = usableVoices.find((voice) => reporter.voiceHints.some((hint) => voice.name.toLowerCase().includes(hint)));
  if (hintedVoice) return hintedVoice;

  const genderPattern = reporter.voiceGender === "male"
    ? /guy|david|brian|daniel|mark|alex|male/i
    : /jenny|aria|zira|samantha|susan|sonia|maria|female/i;
  const genderVoices = usableVoices.filter((voice) => genderPattern.test(voice.name));
  return genderVoices[reporterIndex % Math.max(1, genderVoices.length)]
    || usableVoices.find((voice) => /natural|neural|online|premium/i.test(voice.name))
    || usableVoices[reporterIndex % usableVoices.length]
    || usableVoices[0];
}

function scheduleCameraFlash() {
  if (!flashLayer) return;
  const fireFlash = () => {
    const positions = [
      ["16%", "19%"],
      ["38%", "24%"],
      ["71%", "18%"],
      ["89%", "22%"],
    ];
    const [x, y] = positions[Math.floor(Math.random() * positions.length)];
    flashLayer.style.setProperty("--flash-x", x);
    flashLayer.style.setProperty("--flash-y", y);
    flashLayer.classList.remove("flash");
    void flashLayer.offsetWidth;
    flashLayer.classList.add("flash");
    window.setTimeout(() => flashLayer.classList.remove("flash"), 650);
  };

  const loop = () => {
    window.setTimeout(() => {
      fireFlash();
      loop();
    }, 4500 + Math.random() * 7500);
  };
  loop();
}

function evaluateAnswer(answer, question) {
  const normalized = normalize(answer);
  const wordCount = normalized.split(/\s+/).filter(Boolean).length;
  const riskyHits = riskyPhrases.filter((phrase) => normalized.includes(phrase));
  const messageStructure = analyzeMessageDiscipline(answer);

  const empathy = cap(scoreTermHits(normalized, empathyTerms, 2.8) + lengthBand(wordCount, 45, 180, 3), 15);
  const accuracy = cap(scoreTermHits(normalized, facts, 1.85) + correctsMisinformation(normalized, question) + lengthBand(wordCount, 60, 210, 2), 18);
  const action = cap(scoreTermHits(normalized, actionTerms, 2.1) + hasSpecificClinicGuidance(normalized), 17);
  const transparency = cap(scoreTermHits(normalized, transparencyTerms, 2.0), 12);
  const respect = cap(scoreTermHits(normalized, respectTerms, 2.2) + avoidsStigma(normalized, question), 10);
  const relevance = cap(scoreTermHits(normalized, question.focus, 3.0) + lengthBand(wordCount, 50, 220, 2), 13);
  const messageDiscipline = cap(messageStructure.score, 15);

  const rawCriteria = { empathy, accuracy, action, transparency, respect, relevance, messageDiscipline };
  const penalty = riskyHits.length * 6 + overlongPenalty(wordCount) + tooShortPenalty(wordCount);
  const total = Math.max(0, Math.min(100, Math.round(Object.values(rawCriteria).reduce((sum, value) => sum + value, 0) - penalty)));

  return {
    total,
    penalty,
    riskyHits,
    criteria: rawCriteria,
    wordCount,
    messageStructure,
    strengths: buildStrengths(rawCriteria, normalized, messageStructure),
    improvements: buildImprovements(rawCriteria, riskyHits, wordCount, question, messageStructure),
    model: question.model,
  };
}

function scoreTermHits(text, terms, multiplier) {
  const hits = terms.reduce((count, term) => count + (text.includes(term) ? 1 : 0), 0);
  return hits * multiplier;
}

function lengthBand(wordCount, low, high, points) {
  if (wordCount >= low && wordCount <= high) return points;
  if (wordCount >= Math.floor(low * .7) && wordCount <= Math.floor(high * 1.35)) return points / 2;
  return 0;
}

function hasSpecificClinicGuidance(text) {
  let points = 0;
  if (text.includes("may 3") && text.includes("may 16")) points += 3;
  if (text.includes("4-h") || text.includes("fairgrounds")) points += 2;
  if (text.includes("hotline") || text.includes("800") || text.includes("651")) points += 2;
  if (text.includes("14 days")) points += 2;
  return points;
}

function correctsMisinformation(text, question) {
  if (question.topic !== "Misinformation") return 0;
  let points = 0;
  if (text.includes("not") && text.includes("mrna")) points += 4;
  if (text.includes("no") && text.includes("tracking")) points += 3;
  if (text.includes("immune globulin")) points += 3;
  return points;
}

function avoidsStigma(text, question) {
  let points = 0;
  if (question.topic === "Privacy and immigration" || question.topic === "Supply and equity") {
    if (text.includes("regardless") || text.includes("immigration status")) points += 4;
    if (text.includes("privacy") || text.includes("confidential")) points += 3;
    if (text.includes("stigma") || text.includes("harassment") || text.includes("respect")) points += 2;
  } else {
    points += 7;
    if (["families", "residents", "people", "community", "parents", "children"].some((term) => text.includes(term))) points += 3;
    if (["privacy", "respect", "equity", "access", "language", "regardless"].some((term) => text.includes(term))) points += 3;
  }
  return points;
}

function overlongPenalty(wordCount) {
  if (wordCount > 360) return 8;
  if (wordCount > 280) return 4;
  return 0;
}

function tooShortPenalty(wordCount) {
  if (wordCount < 25) return 14;
  if (wordCount < 45) return 7;
  return 0;
}

function buildStrengths(criteria, text, messageStructure) {
  const strengths = [];
  if (criteria.empathy >= 10) strengths.push("You acknowledged public concern rather than jumping straight to facts.");
  if (criteria.action >= 13) strengths.push("You gave practical next steps people can follow after the briefing.");
  if (criteria.accuracy >= 14) strengths.push("You anchored the response in key scenario facts and public health guidance.");
  if (criteria.transparency >= 10) strengths.push("You signaled what is known, what is still being investigated, and when updates will come.");
  if (criteria.respect >= 10) strengths.push("You protected privacy and avoided stigmatizing affected workers or communities.");
  if (criteria.messageDiscipline >= 10) strengths.push(`You stayed close to the 3-key-message frame, with ${messageStructure.keyMessages} message block${messageStructure.keyMessages === 1 ? "" : "s"}.`);
  if (text.includes("hotline")) strengths.push("You included the hotline, which is useful for people with individual exposure questions.");
  if (strengths.length === 0) strengths.push("You gave an answer, which is the first step under pressure. Now make it more specific and action-oriented.");
  return strengths.slice(0, 5);
}

function buildImprovements(criteria, riskyHits, wordCount, question, messageStructure) {
  const improvements = [];
  if (criteria.empathy < 9) improvements.push("Start with one sentence of empathy: acknowledge fear, frustration, grief, or confusion.");
  if (criteria.accuracy < 12) improvements.push("Add the most relevant facts: immune globulin timing, clinic dates, exposure window, symptoms, or boil water guidance.");
  if (criteria.action < 12) improvements.push("End with clear actions: who should do what, when, where, and how to get help.");
  if (criteria.transparency < 8) improvements.push("Say what is confirmed and what remains under investigation. Avoid sounding overconfident.");
  if (criteria.respect < 8) improvements.push("Use privacy-protective, non-stigmatizing language, especially around the child and the food worker.");
  if (criteria.relevance < 9) improvements.push(`Answer the reporter's core angle more directly: ${question.topic}.`);
  if (criteria.messageDiscipline < 9) {
    const disciplineAdvice = messageStructure.keyMessages > 3
      ? "Limit the answer to three central communication objectives, then place facts and actions underneath those objectives."
      : "Keep each communication objective lean by using no more than three supporting details under it.";
    improvements.push(disciplineAdvice);
  }
  if (riskyHits.length) improvements.push(`Avoid risky phrases detected here: ${riskyHits.join(", ")}.`);
  if (wordCount < 45) improvements.push("The answer is very short. In a briefing, aim for a clear 45-150 word response.");
  if (wordCount > 280) improvements.push("The answer is long for live TV. Try a tighter response with one empathy line, two facts, and three actions.");
  return improvements.slice(0, 6);
}

function renderScore(result) {
  const fragment = scoreTemplate.content.cloneNode(true);
  const scoreValue = fragment.querySelector("#scoreValue");
  const scoreTitle = fragment.querySelector("#scoreTitle");
  const scoreNarrative = fragment.querySelector("#scoreNarrative");
  const rubricGrid = fragment.querySelector("#rubricGrid");
  const strengthList = fragment.querySelector("#strengthList");
  const improvementList = fragment.querySelector("#improvementList");
  const modelPointList = fragment.querySelector("#modelPointList");
  const messageMetrics = fragment.querySelector("#messageMetrics");
  const scoreRing = fragment.querySelector(".score-ring");

  scoreValue.textContent = result.total;
  scoreTitle.textContent = scoreLabel(result.total);
  scoreNarrative.textContent = narrative(result);
  messageMetrics.textContent = messageNarrative(result.messageStructure);
  scoreRing.style.setProperty("--score", result.total);
  scoreRing.style.setProperty("--score-color", scoreColor(result.total));

  rubric.forEach((item) => {
    const node = document.createElement("div");
    node.className = "rubric-item";
    node.innerHTML = `<strong>${item.label}: ${Math.round(result.criteria[item.key])}/${item.max}</strong><span>${rubricNote(item.key, result.criteria[item.key], item.max)}</span>`;
    rubricGrid.append(node);
  });

  result.strengths.forEach((strength) => strengthList.append(listItem(strength)));
  result.improvements.forEach((improvement) => improvementList.append(listItem(improvement)));
  result.model.forEach((point) => modelPointList.append(listItem(point)));
  fragment.append(buildEmailRecordPanel(result));

  scorePanel.innerHTML = "";
  scorePanel.append(fragment);
  difyResponsePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildEmailRecordPanel(result) {
  const panel = document.createElement("div");
  panel.className = "email-record-panel";

  const heading = document.createElement("h3");
  heading.textContent = "Email this practice record";

  const note = document.createElement("p");
  note.textContent = "Optional: email the record, or download it as a TXT, Word, or PDF file. You can review email content before sending.";

  const row = document.createElement("div");
  row.className = "email-record-row";

  const input = document.createElement("input");
  input.type = "email";
  input.placeholder = "name@example.com";
  input.setAttribute("aria-label", "Email address for score record");

  const button = document.createElement("button");
  button.className = "ghost-button";
  button.type = "button";
  button.textContent = "Prepare email";

  const downloadButton = document.createElement("button");
  downloadButton.className = "ghost-button";
  downloadButton.type = "button";
  downloadButton.textContent = "Download record";

  const formatSelect = document.createElement("select");
  formatSelect.setAttribute("aria-label", "Download format");
  [
    ["txt", "TXT"],
    ["doc", "Word"],
    ["pdf", "PDF"],
  ].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    formatSelect.append(option);
  });

  const status = document.createElement("p");
  status.className = "email-record-status";
  status.setAttribute("aria-live", "polite");

  button.addEventListener("click", () => {
    const recipient = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
      status.textContent = "Enter a valid email address first.";
      return;
    }

    const subject = `Risk Communication Practice Score: ${result.total}/100`;
    const body = buildEmailRecordBody(result);
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your mail app should open with the record pre-filled.";
  });

  downloadButton.addEventListener("click", () => {
    downloadPracticeRecord(result, formatSelect.value);
    status.textContent = `The score record has been downloaded as a ${formatSelect.value.toUpperCase()} file.`;
  });

  row.append(input, button, formatSelect, downloadButton);
  panel.append(heading, note, row, status);
  return panel;
}

function buildEmailRecordBody(result) {
  const criteriaLines = Object.entries(result.criteria)
    .map(([key, value]) => `${key}: ${Math.round(value)}`)
    .join("\n");
  const strengths = result.strengths.map((item) => `- ${item}`).join("\n");
  const improvements = result.improvements.map((item) => `- ${item}`).join("\n");
  const modelPoints = result.model.map((item) => `- ${item}`).join("\n");
  const answer = truncateForEmail(answerInput.value.trim(), 2800);
  return [
    "Risk Communication Simulator Practice Record",
    "",
    `Case: ${document.title}`,
    "",
    "Case background:",
    caseBackgroundSummary(),
    "",
    `Reporter: ${currentReporter ? currentReporter.name : "Not selected"}`,
    `Question: ${currentQuestion ? currentQuestion.text : "Not selected"}`,
    "",
    `Score: ${result.total}/100`,
    `Words: ${result.wordCount}`,
    messageNarrative(result.messageStructure),
    "",
    "Rubric:",
    criteriaLines,
    "",
    "What worked:",
    strengths,
    "",
    "Strengthen next:",
    improvements,
    "",
    "High-scoring answer should include:",
    modelPoints,
    "",
    "Your answer:",
    answer,
  ].join("\n");
}

function caseBackgroundSummary() {
  return [
    "Apple Grove faces a multi-hazard public health briefing involving Hepatitis A(1c) exposure linked to Rob's Roadside Restaurant, tournament-related exposure concerns, an immune globulin clinic, wildfire smoke, a boil water advisory, protests, privacy concerns, and misinformation.",
    "The learner speaks as the Public Health Officer / Director of the Health Department and must provide concise, empathetic, accurate, action-oriented answers while protecting privacy and staying within three key messages."
  ].join("\n");
}

function downloadPracticeRecord(result, format = "txt") {
  const body = buildEmailRecordBody(result);
  const baseName = `risk-communication-score-${new Date().toISOString().slice(0, 10)}`;
  if (format === "doc") {
    downloadBlob(new Blob([buildWordRecord(body)], { type: "application/msword;charset=utf-8" }), `${baseName}.doc`);
    return;
  }
  if (format === "pdf") {
    downloadBlob(buildPdfRecord(body), `${baseName}.pdf`);
    return;
  }
  downloadBlob(new Blob([body], { type: "text/plain;charset=utf-8" }), `${baseName}.txt`);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function buildWordRecord(text) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>Risk Communication Practice Record</title><style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.35;}pre{white-space:pre-wrap;font-family:Calibri,Arial,sans-serif;}</style></head><body><pre>${escapeHtml(text)}</pre></body></html>`;
}

function buildPdfRecord(text) {
  const lines = text
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "?")
    .split(/\r?\n/)
    .flatMap((line) => wrapPdfLine(line, 92));
  const chunks = [];
  for (let i = 0; i < lines.length; i += 54) chunks.push(lines.slice(i, i + 54));

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>",
  ];
  const pageRefs = [];

  chunks.forEach((chunk, index) => {
    const pageObject = 4 + index * 2;
    const contentObject = pageObject + 1;
    pageRefs.push(`${pageObject} 0 R`);
    const stream = buildPdfPageStream(chunk);
    objects[pageObject - 1] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObject} 0 R >>`;
    objects[contentObject - 1] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });

  objects[1] = `<< /Type /Pages /Kids [${pageRefs.join(" ")}] /Count ${pageRefs.length} >>`;
  return new Blob([serializePdf(objects)], { type: "application/pdf" });
}

function buildPdfPageStream(lines) {
  const content = ["BT", "/F1 10 Tf", "13 TL", "50 760 Td"];
  lines.forEach((line, index) => {
    if (index > 0) content.push("T*");
    content.push(`(${escapePdfText(line)}) Tj`);
  });
  content.push("ET");
  return content.join("\n");
}

function serializePdf(objects) {
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}

function wrapPdfLine(line, maxLength) {
  if (!line) return [""];
  const words = line.split(/\s+/);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function escapePdfText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function truncateForEmail(value, maxLength) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength)}\n[Answer truncated for email length.]`;
}

function rubricNote(key, score, max) {
  const ratio = score / max;
  if (ratio >= .78) return "Strong under pressure.";
  if (ratio >= .52) return "Present, but could be sharper.";
  const notes = {
    empathy: "Add a human first line.",
    accuracy: "Use more scenario facts.",
    action: "Make next steps explicit.",
    transparency: "Name uncertainty and updates.",
    respect: "Protect privacy and avoid stigma.",
    relevance: "Address the question's core challenge.",
    messageDiscipline: "Keep to 3 key messages and 3 details max.",
  };
  return notes[key];
}

function scoreLabel(score) {
  if (score >= 90) return "Briefing-ready";
  if (score >= 80) return "Strong response";
  if (score >= 70) return "Good foundation";
  if (score >= 60) return "Needs tightening";
  return "Needs practice";
}

function narrative(result) {
  const base = `Your answer was ${result.wordCount} words. The strongest crisis answers usually combine empathy, confirmed facts, a direct answer to the reporter, and concrete public actions.`;
  const structure = messageNarrative(result.messageStructure);
  if (result.penalty > 0) return `${base} ${structure} The coach also applied ${result.penalty} penalty point(s) for overconfidence, unsafe wording, or length.`;
  return `${base} ${structure}`;
}

function messageNarrative(messageStructure) {
  const labels = messageStructure.objectiveLabels.length
    ? ` (${messageStructure.objectiveLabels.join("; ")})`
    : "";
  return `Message discipline: ${messageStructure.keyMessages} central communication objective${messageStructure.keyMessages === 1 ? "" : "s"} detected${labels}; the busiest objective held ${messageStructure.maxDetails} supporting detail${messageStructure.maxDetails === 1 ? "" : "s"}.`;
}

function analyzeMessageDiscipline(text) {
  const units = messageUnits(text);
  const objectives = clusterCommunicationObjectives(units);
  const activeObjectives = objectives.filter((objective) => objective.units.length || objective.details.length);
  const sideObjectives = detectSideObjectives(text, activeObjectives.length);
  const keyMessages = Math.max(1, activeObjectives.length + sideObjectives.length);
  const detailCounts = activeObjectives.map((objective) => Math.max(1, objective.details.length));
  sideObjectives.forEach(() => detailCounts.push(1));
  const maxDetails = detailCounts.length ? Math.max(...detailCounts) : 0;
  let score = 15;
  if (keyMessages > 3) score -= Math.min(9, (keyMessages - 3) * 3);
  if (maxDetails > 3) score -= Math.min(8, (maxDetails - 3) * 2);
  if (text.trim().length < 40) score -= 5;
  if (text.trim().length > 1400) score -= 3;
  return {
    score: cap(score, 15),
    keyMessages,
    maxDetails,
    detailCounts,
    objectives: activeObjectives,
    objectiveLabels: activeObjectives.map((objective) => objective.label).concat(sideObjectives),
    segments: units,
  };
}

function messageUnits(text) {
  return text
    .split(/\n+|(?<=[.!?])\s+/)
    .map((unit) => unit.replace(/^([-*•]|\d+[).:-])\s+/, "").trim())
    .map((unit) => unit.replace(/^(first|second|third|finally|next|also|what we know|what we are investigating)\s*[:,.-]\s*/i, "").trim())
    .filter((unit) => unit.length >= 8);
}

function clusterCommunicationObjectives(units) {
  const objectives = objectiveDefinitions().map((definition) => ({
    ...definition,
    units: [],
    details: [],
  }));

  units.forEach((unit) => {
    const normalizedUnit = normalize(unit);
    let bestObjective = objectives[1];
    let bestScore = 0;

    objectives.forEach((objective) => {
      const score = objective.terms.reduce((sum, term) => sum + (normalizedUnit.includes(term) ? 1 : 0), 0);
      if (score > bestScore) {
        bestScore = score;
        bestObjective = objective;
      }
    });

    bestObjective.units.push(unit);
  });

  objectives.forEach((objective) => {
    objective.details = objective.detailGroups
      .filter((detail) => detail.terms.some((term) => objective.units.some((unit) => normalize(unit).includes(term))))
      .map((detail) => detail.label);
  });

  return objectives;
}

function objectiveDefinitions() {
  return [
    {
      key: "care",
      label: "Care / reassurance",
      terms: [
        "concern",
        "worried",
        "fear",
        "frustrat",
        "sorry",
        "condolence",
        "families",
        "parents",
        "children",
        "respect",
        "privacy",
        "confidential",
        "stigma",
        "harassment",
        "regardless",
        "immigration",
        "trust",
        "panic",
        "reassur",
      ],
      detailGroups: [
        { label: "empathy or concern", terms: ["concern", "worried", "fear", "frustrat", "sorry", "condolence"] },
        { label: "reassurance / risk context", terms: ["panic", "not every", "risk", "reassur", "trust"] },
        { label: "privacy protection", terms: ["privacy", "confidential", "identify", "identifying"] },
        { label: "anti-stigma language", terms: ["stigma", "harassment", "regardless", "immigration"] },
        { label: "family-centered language", terms: ["families", "parents", "children", "residents"] },
      ],
    },
    {
      key: "inform",
      label: "Facts / risk framing",
      terms: [
        "confirmed",
        "known",
        "investigat",
        "update",
        "exposure",
        "exposed",
        "hepatitis",
        "hep a",
        "immune globulin",
        "14 days",
        "may 3",
        "may 16",
        "april 26",
        "may 17",
        "symptom",
        "fever",
        "nausea",
        "jaundice",
        "mrna",
        "tracking",
        "dna",
        "smoke",
        "boil water",
        "pressure",
        "strain",
        "supply",
        "coordination",
      ],
      detailGroups: [
        { label: "confirmed facts", terms: ["confirmed", "known", "hepatitis", "hep a", "strain"] },
        { label: "exposure dates or eligibility", terms: ["exposure", "exposed", "may 3", "may 16", "april 26", "may 17"] },
        { label: "immune globulin timing", terms: ["immune globulin", "14 days"] },
        { label: "symptoms", terms: ["symptom", "fever", "nausea", "jaundice", "vomit", "abdominal"] },
        { label: "misinformation correction", terms: ["not mrna", "mrna", "tracking", "dna", "false"] },
        { label: "uncertainty / investigation", terms: ["investigat", "still learning", "update", "testing"] },
        { label: "environmental risk facts", terms: ["smoke", "boil water", "pressure", "wildfire"] },
        { label: "coordination or supply facts", terms: ["supply", "staff", "coordination", "partners"] },
      ],
    },
    {
      key: "action",
      label: "Action / next steps",
      terms: [
        "should",
        "need to",
        "please",
        "attend",
        "come to",
        "clinic",
        "call",
        "hotline",
        "seek care",
        "doctor",
        "provider",
        "boil",
        "stay indoors",
        "reduce smoke",
        "wash",
        "hand",
        "transportation",
        "location",
        "hours",
        "4-h",
        "fairgrounds",
      ],
      detailGroups: [
        { label: "seek medical care", terms: ["seek care", "doctor", "provider", "medical care"] },
        { label: "clinic logistics", terms: ["clinic", "attend", "come to", "4-h", "fairgrounds", "location", "hours", "today", "tomorrow", "may 3", "may 16"] },
        { label: "hotline / help line", terms: ["hotline", "call", "800", "651"] },
        { label: "water safety action", terms: ["boil", "water"] },
        { label: "smoke protection action", terms: ["stay indoors", "reduce smoke", "mask"] },
        { label: "access support", terms: ["transportation", "language", "disability", "access"] },
        { label: "hygiene action", terms: ["wash", "hand", "sanitize"] },
      ],
    },
  ];
}

function detectSideObjectives(text, activeObjectiveCount) {
  if (activeObjectiveCount < 3) return [];
  const normalizedText = normalize(text);
  const sideObjectiveGroups = [
    { label: "Accountability / enforcement", terms: ["resign", "criminal", "prosecute", "lawsuit", "fine", "punish", "discipline"] },
    { label: "Political defense", terms: ["political", "mayor", "governor", "election", "partisan"] },
    { label: "Long-term policy reform", terms: ["new law", "legislation", "budget", "funding", "infrastructure", "reform"] },
  ];
  return sideObjectiveGroups
    .filter((group) => group.terms.some((term) => normalizedText.includes(term)))
    .map((group) => group.label);
}

function splitIntoSegments(text) {
  const lines = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const bulletLines = lines.filter((line) => /^([-*•]|\d+[).:-])\s+/.test(line));
  if (bulletLines.length >= 2) {
    return bulletLines.map((line) => line.replace(/^([-*•]|\d+[).:-])\s+/, "").trim()).filter(Boolean);
  }

  const sentences = text
    .split(/[.!?]+\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 12);

  if (sentences.length >= 2) return sentences;
  if (lines.length >= 2) return lines;
  return [text.trim()].filter(Boolean);
}

function countSupportDetails(segment) {
  const lower = segment.toLowerCase();
  const markers = [
    "because",
    "since",
    "including",
    "such as",
    "for example",
    "for instance",
    "also",
    "additionally",
    "another",
    "plus",
    "first",
    "second",
    "third",
  ];
  let count = 1;
  for (const marker of markers) {
    if (lower.includes(marker)) count += 1;
  }
  const punctuationCount = (segment.match(/[,;:]/g) || []).length;
  count += Math.min(3, Math.floor(punctuationCount / 2));
  return Math.max(1, Math.min(count, 6));
}

function scoreColor(score) {
  if (score >= 85) return "var(--success)";
  if (score >= 70) return "var(--gold)";
  if (score >= 55) return "var(--amber)";
  return "var(--danger)";
}

function listItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function normalize(value) {
  return value.toLowerCase().replace(/[^\w\s\-()]/g, " ").replace(/\s+/g, " ").trim();
}

function cap(value, max) {
  return Math.min(max, Math.max(0, value));
}

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

window.speechSynthesis?.addEventListener?.("voiceschanged", () => {
  if (currentQuestion) return;
  window.speechSynthesis.getVoices();
});
