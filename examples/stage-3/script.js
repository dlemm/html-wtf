// === JAVASCRIPT FUNKTIONEN === //

// Funktion 1: Begrüßung
function sagHallo() {
  let name = prompt("Wie heißt du?");
  if (name) {
    alert("🎉 Hallo " + name + "! Willkommen auf meiner Website!");
    document.getElementById("intro").textContent =
      "Hallo " + name + "! Schön, dass du hier bist! 😊";
  }
}

// Funktion 2: Hintergrundfarbe ändern
function changeColor() {
  const colors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

// Funktion 3: Neues zufälliges Bild laden
function changeImage() {
  const img = document.querySelector("img");
  const randomId = Math.floor(Math.random() * 1000);
  img.src = "https://picsum.photos/800/300?random=" + randomId;
}

// Funktion 4: Click-Counter
let clickCount = 0;
function countClicks() {
  clickCount++;
  document.getElementById("counter").textContent =
    "Geklickt: " + clickCount + " mal 🎯";

  // Easter Egg bei 10 Klicks
  if (clickCount === 10) {
    alert("🎊 Wow! Du hast 10 mal geklickt! Du bist ein Klick-Champion!");
  }
}

// Bonus: Tastatur-Event (Easter Egg)
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    alert("🎮 Konami Code aktiviert! Easter Egg gefunden");
  }
});
