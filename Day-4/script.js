const voiceSelect = document.getElementById("voiceSelect");
const rate = document.getElementById("rate");
const pitch = document.getElementById("pitch");
const rateValue = document.getElementById("rateValue");
const pitchValue = document.getElementById("pitchValue");

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

speechSynthesis.onvoiceschanged = loadVoices;

function speakText() {
  const text = document.getElementById("text").value.trim();
  if (!text) return;

  const utter = new SpeechSynthesisUtterance(text);
  const selectedVoice = voices[voiceSelect.value];
  utter.voice = selectedVoice;
  utter.rate = parseFloat(rate.value);
  utter.pitch = parseFloat(pitch.value);

  speechSynthesis.speak(utter);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Show live rate and pitch values
rate.addEventListener("input", () => {
  rateValue.textContent = rate.value;
});
pitch.addEventListener("input", () => {
  pitchValue.textContent = pitch.value;
});
