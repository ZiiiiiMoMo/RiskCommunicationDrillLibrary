const reporters = [
  {
    name: "Daniel Kim",
    outlet: "Channel 7 Live North",
    style: "fast, camera-ready, confrontational",
    voiceGender: "male",
    accent: "General American",
    voiceHints: ["guy", "david", "brian", "daniel"],
    voiceRate: 1.07,
    voicePitch: .86,
  },
  {
    name: "Mariah Johnson",
    outlet: "Prairie Lantern Ledger, community desk",
    style: "skeptical and precise",
    voiceGender: "female",
    accent: "Midwestern American",
    voiceHints: ["jenny", "aria", "zira", "samantha"],
    voiceRate: 1.0,
    voicePitch: 1.08,
  },
  {
    name: "Harold Pierce",
    outlet: "Capitol Wire",
    style: "political pressure",
    voiceGender: "male",
    accent: "Northeastern American",
    voiceHints: ["david", "guy", "brian", "daniel"],
    voiceRate: 1.1,
    voicePitch: .74,
  },
  {
    name: "Sofia Martinez",
    outlet: "North Star Investigates",
    style: "accountability-focused",
    voiceGender: "female",
    accent: "Southwestern American",
    voiceHints: ["aria", "jenny", "maria", "zira"],
    voiceRate: .96,
    voicePitch: 1.0,
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
    name: "Mateo Rivera",
    outlet: "Prairie Lantern Public Radio",
    style: "local and practical",
    voiceGender: "male",
    accent: "Upper Midwest American",
    voiceHints: ["guy", "david", "mark", "daniel"],
    voiceRate: .93,
    voicePitch: .78,
  },
  {
    name: "Claire Whitman",
    outlet: "Upper Midwest News Service",
    style: "statewide implications",
    voiceGender: "female",
    accent: "Southern American",
    voiceHints: ["jenny", "susan", "samantha", "aria"],
    voiceRate: .91,
    voicePitch: 1.04,
  },
];

const questions = [
  {
    topic: "Delayed recognition",
    text: "The index MDR-TB case dates back to 2015, but the county is only standing here in 2017 calling this an outbreak. Did Prairie Lantern County miss two years of warning signs?",
    focus: ["2015", "2017", "delay", "warning", "outbreak", "mdr-tb"],
    model: [
      "Acknowledge concern about timing without becoming defensive.",
      "Explain what changed from individual case management to outbreak response.",
      "Name current actions: contact tracing, screening, treatment planning, and community outreach.",
      "Avoid implying blame before the investigation is complete.",
    ],
  },
  {
    topic: "Senior center exposure",
    text: "You keep saying the senior activity center is a focus, but you also admit the sign-in sheets are unreliable. How can residents trust your exposure list if you do not even know who was there?",
    focus: ["senior center", "sign-in", "exposure", "contact tracing", "trust"],
    model: [
      "Be transparent that records are incomplete.",
      "Explain that contact tracing uses multiple sources, not sign-in sheets alone.",
      "Ask people who may have attended to come forward for screening.",
      "Protect privacy while giving clear screening guidance.",
    ],
  },
  {
    topic: "Hmong community stigma",
    text: "Is it fair to say this outbreak is happening because Hmong elders brought TB with them from refugee camps decades ago?",
    focus: ["hmong", "refugee", "stigma", "community", "blame"],
    model: [
      "Reject blame and stigma clearly.",
      "Explain TB risk in terms of exposure, latent infection, treatment access, and public health support.",
      "Respect the Hmong community and name trusted community partnership.",
      "Return to screening and treatment actions.",
    ],
  },
  {
    topic: "Privacy and names",
    text: "Because many clan members share the same names, will you release names or clan information so families can figure out who was exposed?",
    focus: ["privacy", "names", "clan", "families", "exposed"],
    model: [
      "Say the county will not release identifying patient information.",
      "Explain that public health will use confidential outreach and community partners.",
      "Tell people how to assess whether they should be screened.",
      "Use privacy-protective language toward families and clans.",
    ],
  },
  {
    topic: "Deportation fear",
    text: "People in the community are afraid that if they come forward with TB symptoms, their immigration status or family history could be used against them. Can you promise that will not happen?",
    focus: ["deportation", "immigration", "fear", "symptoms", "trust"],
    model: [
      "Acknowledge the fear as real and understandable.",
      "State that screening and treatment are public health services, not immigration enforcement.",
      "Explain confidentiality protections in plain language.",
      "Encourage people with symptoms or exposure concerns to seek screening.",
    ],
  },
  {
    topic: "Provider refusal",
    text: "Some local providers reportedly declined to see patients with possible TB. Why should the community trust a system that even doctors seem afraid of?",
    focus: ["providers", "declined", "trust", "tb", "guidance"],
    model: [
      "Acknowledge that provider confusion damages trust.",
      "Explain that MDR-TB requires specialized guidance and infection-control support.",
      "Name steps to brief providers and coordinate with MDH/CDC experts.",
      "Tell patients how to access screening and care now.",
    ],
  },
  {
    topic: "CDC involvement",
    text: "If you had to call the CDC and convene national specialists, does that mean the county was out of its depth and unprepared?",
    focus: ["cdc", "specialists", "unprepared", "county", "guidance"],
    model: [
      "Be transparent that MDR-TB is complex and specialized.",
      "Frame CDC consultation as responsible escalation, not failure.",
      "Explain what local public health is doing with state and national support.",
      "Commit to updates without overpromising.",
    ],
  },
  {
    topic: "Latent versus active TB",
    text: "Are people with latent TB walking around infecting others, and should families avoid visiting elderly relatives until this is over?",
    focus: ["latent", "active", "infectious", "families", "elderly"],
    model: [
      "Clarify the difference between latent TB infection and active TB disease.",
      "Avoid creating panic or unnecessary family separation.",
      "Encourage screening for people with exposure or symptoms.",
      "Give symptom and follow-up guidance in plain language.",
    ],
  },
  {
    topic: "Treatment burden",
    text: "Two years of continuous antibiotics sounds overwhelming. How realistic is it to expect elderly residents to complete treatment, especially if they already distrust the system?",
    focus: ["two years", "antibiotics", "treatment", "follow-up", "trust"],
    model: [
      "Acknowledge that treatment is long and difficult.",
      "Explain why completion matters for the patient and community.",
      "Describe support: case management, language access, reminders, transportation, and provider coordination.",
      "Avoid blaming patients who miss visits.",
    ],
  },
  {
    topic: "Language access",
    text: "Your own screening program did not have enough Hmong-speaking workers, and some people thought TB skin tests were vaccines. How did communication fail so badly?",
    focus: ["hmong-speaking", "language", "skin test", "vaccine", "communication"],
    model: [
      "Acknowledge the communication gap plainly.",
      "Correct the misunderstanding: a TB skin test screens for infection; it is not a vaccine.",
      "Describe Hmong-language outreach and trusted messengers.",
      "Commit to improving materials and provider education.",
    ],
  },
  {
    topic: "ICS activation",
    text: "Why did you wait until 2017 to activate incident command? Should ICS have been set up after the first MDR-TB case in 2015?",
    focus: ["ics", "incident command", "2015", "2017", "preparedness"],
    model: [
      "Explain what triggers ICS: scale, staffing needs, cross-agency coordination, and operational complexity.",
      "Avoid hindsight defensiveness.",
      "Describe current ICS roles: operations, planning, finance, liaison, and incident command.",
      "Name preparedness improvements going forward.",
    ],
  },
  {
    topic: "Containment claim",
    text: "You say new cases have declined, but cases continue to pop up. Is this outbreak actually contained or are you just hoping it burns out?",
    focus: ["declined", "cases", "contained", "monitoring", "follow-up"],
    model: [
      "Avoid declaring victory or saying there is zero risk.",
      "Explain that TB response has long legs because latent infection can become active later.",
      "Describe ongoing monitoring, case management, and follow-up.",
      "Give the public a clear action if they have symptoms or exposure concerns.",
    ],
  },
  {
    topic: "Community trust",
    text: "Why should elderly Hmong residents trust county officials now when the county lost specialized staff, had turnover, and apparently did not understand their community well enough?",
    focus: ["trust", "turnover", "hmong", "community", "staff"],
    model: [
      "Acknowledge the trust problem directly.",
      "Name concrete changes: TB-experienced medical director, dedicated TB program manager, nurses, and community partners.",
      "Commit to Hmong-language, clan-aware outreach.",
      "Invite screening and follow-up without blame.",
    ],
  },
  {
    topic: "Symptoms and screening",
    text: "For someone listening right now, what symptoms should make them call today, and who needs screening even if they feel fine?",
    focus: ["symptoms", "cough", "fever", "night sweats", "screening", "latent"],
    model: [
      "Name common active TB symptoms: persistent cough, fever, night sweats, weight loss, fatigue.",
      "Explain that exposed people may need screening even without symptoms.",
      "Tell people how to access screening and follow-up.",
      "Avoid alarming people without exposure.",
    ],
  },
  {
    topic: "Public cost and dedicated TB program",
    text: "Does every county now need a dedicated TB program because of this? Who pays for two years of case management and treatment support?",
    focus: ["cost", "dedicated", "tb program", "case management", "treatment"],
    model: [
      "Avoid reducing the answer to cost alone.",
      "Explain that capacity should match local risk, community needs, and state support.",
      "Name the public health value of preventing transmission and drug resistance.",
      "Commit to transparent funding and access information.",
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
  "mdr-tb",
  "multidrug resistant",
  "multi-drug resistant",
  "tuberculosis",
  "tb",
  "latent",
  "active",
  "mycobacterium tuberculosis",
  "2015",
  "2017",
  "hmong",
  "senior activity center",
  "senior center",
  "clan",
  "multigenerational",
  "screening",
  "skin test",
  "not a vaccine",
  "symptoms",
  "cough",
  "fever",
  "night sweats",
  "weight loss",
  "two years",
  "antibiotics",
  "treatment",
  "follow-up",
  "contact tracing",
  "cdc",
  "mdh",
  "incident command",
  "ics",
  "privacy",
  "confidential",
  "stigma",
  "deportation",
  "language access",
  "hmong-speaking",
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
  "screening",
  "come",
  "attend",
  "follow-up",
  "seek medical",
  "doctor",
  "provider",
  "symptoms",
  "updates",
  "transport",
  "treatment",
  "case manager",
  "contact tracing",
  "language",
  "community",
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
  "deportation",
  "not release",
  "confidential",
  "do not stigmatize",
  "stigma",
  "language",
  "access",
  "equity",
  "hmong",
  "community leaders",
  "trusted",
];

const riskyPhrases = [
  "no risk",
  "zero risk",
  "guarantee",
  "nothing to worry",
  "everyone is safe",
  "hmong people caused",
  "refugees caused",
  "immigrants caused",
  "illegal immigrants caused",
  "they caused",
  "deport them",
  "report them to immigration",
  "release the names",
  "release names",
  "skin test is a vaccine",
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
const scorePanel = document.querySelector("#scorePanel");
const scoreTemplate = document.querySelector("#scoreTemplate");
const hotspots = [...document.querySelectorAll(".reporter-hotspot")];
const standees = [...document.querySelectorAll(".standee")];
const flashLayer = document.querySelector(".flash-layer");

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
  scoreButton.disabled = !currentQuestion || answerInput.value.trim().length < 20;
});

scoreButton.addEventListener("click", () => {
  if (!currentQuestion) return;
  renderScore(evaluateAnswer(answerInput.value, currentQuestion));
});

clearButton.addEventListener("click", () => {
  answerInput.value = "";
  updateAnswerCount();
  scoreButton.disabled = true;
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

function updateAnswerCount() {
  if (!answerCount) return;
  const count = answerInput.value.trim() ? answerInput.value.trim().split(/\s+/).length : 0;
  answerCount.textContent = `${count} ${count === 1 ? "word" : "words"}`;
}

function callOnReporter(reporterIndex) {
  currentReporter = reporters[reporterIndex];
  currentQuestion = nextQuestion();

  hotspots.forEach((hotspot) => hotspot.classList.toggle("active", Number(hotspot.dataset.reporter) === reporterIndex));
  standees.forEach((standee) => standee.classList.remove("active"));
  const selectedStandee = standees[reporterIndex];
  if (selectedStandee) {
    void selectedStandee.offsetWidth;
    selectedStandee.classList.add("active");
  }

  reporterName.textContent = currentReporter.name;
  reporterOutlet.textContent = `${currentReporter.outlet} - ${currentReporter.style}; ${currentReporter.accent}`;
  questionText.textContent = `"${currentQuestion.text}"`;
  replayButton.disabled = false;
  scoreButton.disabled = answerInput.value.trim().length < 20;
  speak(`${currentReporter.name}, ${currentReporter.outlet}. ${currentQuestion.text}`);
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
  scoreButton.disabled = !currentQuestion || answerInput.value.trim().length < 20;
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

function speak(text) {
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
  if (text.includes("screening") || text.includes("screen")) points += 3;
  if (text.includes("follow-up") || text.includes("multiple visits")) points += 2;
  if (text.includes("symptoms") || text.includes("cough") || text.includes("night sweats")) points += 2;
  if (text.includes("treatment") || text.includes("antibiotics") || text.includes("two years")) points += 2;
  if (text.includes("hmong-speaking") || text.includes("language") || text.includes("community leaders")) points += 2;
  return points;
}

function correctsMisinformation(text, question) {
  let points = 0;
  if (question.topic === "Latent versus active TB") {
    if (text.includes("latent") && text.includes("active")) points += 4;
    if (text.includes("not") && text.includes("infectious")) points += 2;
  }
  if (question.topic === "Language access") {
    if (text.includes("skin test") && (text.includes("not a vaccine") || text.includes("screen"))) points += 4;
  }
  if (text.includes("confidential") || text.includes("privacy")) points += 2;
  return points;
}

function avoidsStigma(text, question) {
  let points = 0;
  if (["Hmong community stigma", "Privacy and names", "Deportation fear", "Community trust"].includes(question.topic)) {
    if (text.includes("regardless") || text.includes("immigration status") || text.includes("deportation")) points += 4;
    if (text.includes("privacy") || text.includes("confidential")) points += 3;
    if (text.includes("stigma") || text.includes("respect") || text.includes("not blame") || text.includes("without blame")) points += 2;
  } else {
    points += 7;
    if (["families", "residents", "people", "community", "elders", "hmong"].some((term) => text.includes(term))) points += 3;
    if (["privacy", "respect", "equity", "access", "language", "regardless", "trusted"].some((term) => text.includes(term))) points += 3;
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
  if (criteria.respect >= 10) strengths.push("You protected privacy and avoided stigmatizing Hmong elders, families, immigrants, or the broader community.");
  if (criteria.messageDiscipline >= 10) strengths.push(`You stayed close to the 3-key-message frame, with ${messageStructure.keyMessages} message block${messageStructure.keyMessages === 1 ? "" : "s"}.`);
  if (text.includes("screening") || text.includes("follow-up")) strengths.push("You included concrete screening or follow-up guidance, which is essential for MDR-TB response.");
  if (strengths.length === 0) strengths.push("You gave an answer, which is the first step under pressure. Now make it more specific and action-oriented.");
  return strengths.slice(0, 5);
}

function buildImprovements(criteria, riskyHits, wordCount, question, messageStructure) {
  const improvements = [];
  if (criteria.empathy < 9) improvements.push("Start with one sentence of empathy: acknowledge fear, frustration, grief, or confusion.");
  if (criteria.accuracy < 12) improvements.push("Add the most relevant MDR-TB facts: latent versus active TB, symptoms, screening, two-year treatment, contact tracing, or CDC/MDH coordination.");
  if (criteria.action < 12) improvements.push("End with clear actions: who should seek screening, what symptoms matter, how follow-up works, and where people can get language-access support.");
  if (criteria.transparency < 8) improvements.push("Say what is confirmed and what remains under investigation. Avoid sounding overconfident.");
  if (criteria.respect < 8) improvements.push("Use privacy-protective, non-stigmatizing language, especially around Hmong elders, refugee history, clans, and immigration fears.");
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
  scorePanel.scrollIntoView({ behavior: "smooth", block: "start" });
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
    "Prairie Lantern County is responding to a multidrug-resistant tuberculosis outbreak among elderly Hmong residents. The scenario involves a Hmong senior activity center exposure setting, unreliable sign-in records, shared clan names, stigma, deportation fears, language-access gaps, provider readiness concerns, CDC/MDH coordination, ICS activation, screening compliance, and long-term treatment follow-up.",
    "The learner speaks as the Prairie Lantern County Health Director and must explain MDR-TB plainly, protect privacy, avoid stigmatizing Hmong elders or immigrant/refugee communities, support screening and follow-up, and stay within three key messages."
  ].join("\n");
}

function downloadPracticeRecord(result, format = "txt") {
  const body = buildEmailRecordBody(result);
  const baseName = `mdr-tb-score-${new Date().toISOString().slice(0, 10)}`;
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
        "elders",
        "hmong",
        "respect",
        "privacy",
        "confidential",
        "stigma",
        "regardless",
        "immigration",
        "deportation",
        "trust",
        "panic",
        "reassur",
        "without blame",
      ],
      detailGroups: [
        { label: "empathy or concern", terms: ["concern", "worried", "fear", "frustrat", "sorry", "condolence"] },
        { label: "reassurance / risk context", terms: ["panic", "not every", "risk", "reassur", "trust"] },
        { label: "privacy protection", terms: ["privacy", "confidential", "identify", "identifying"] },
        { label: "anti-stigma language", terms: ["stigma", "regardless", "immigration", "deportation", "without blame"] },
        { label: "community-centered language", terms: ["families", "elders", "hmong", "residents", "community"] },
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
        "mdr-tb",
        "multidrug resistant",
        "multi-drug resistant",
        "tuberculosis",
        "tb",
        "latent",
        "active",
        "senior center",
        "senior activity center",
        "contact tracing",
        "skin test",
        "not a vaccine",
        "2015",
        "2017",
        "symptom",
        "cough",
        "fever",
        "night sweats",
        "weight loss",
        "two years",
        "antibiotics",
        "treatment",
        "cdc",
        "mdh",
        "ics",
        "incident command",
        "coordination",
      ],
      detailGroups: [
        { label: "confirmed MDR-TB facts", terms: ["confirmed", "known", "mdr-tb", "multidrug resistant", "multi-drug resistant", "tuberculosis", "tb"] },
        { label: "latent versus active TB", terms: ["latent", "active", "infectious"] },
        { label: "exposure and contact tracing", terms: ["exposure", "exposed", "contact tracing", "senior center", "senior activity center"] },
        { label: "symptoms", terms: ["symptom", "cough", "fever", "night sweats", "weight loss", "fatigue"] },
        { label: "treatment burden", terms: ["two years", "antibiotics", "treatment", "continuous"] },
        { label: "testing clarification", terms: ["skin test", "not a vaccine", "screening"] },
        { label: "uncertainty / investigation", terms: ["investigat", "still learning", "update", "testing"] },
        { label: "coordination facts", terms: ["cdc", "mdh", "ics", "incident command", "coordination", "partners"] },
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
        "screening",
        "screen",
        "call",
        "hotline",
        "seek care",
        "doctor",
        "provider",
        "follow-up",
        "return",
        "case manager",
        "treatment",
        "antibiotics",
        "contact tracing",
        "transportation",
        "language",
        "hmong-speaking",
        "community leaders",
      ],
      detailGroups: [
        { label: "seek medical care", terms: ["seek care", "doctor", "provider", "medical care"] },
        { label: "screening action", terms: ["screening", "screen", "skin test", "testing", "attend", "come to"] },
        { label: "follow-up action", terms: ["follow-up", "return", "multiple visits", "case manager"] },
        { label: "treatment support", terms: ["treatment", "antibiotics", "two years", "complete"] },
        { label: "hotline / help line", terms: ["hotline", "call"] },
        { label: "access support", terms: ["transportation", "language", "hmong-speaking", "access"] },
        { label: "trusted community outreach", terms: ["community leaders", "clan", "trusted", "partners"] },
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
