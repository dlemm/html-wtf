# Workshop-Handbuch: Deine erste Website

> Von den Grundlagen des Internets bis zur ersten eigenen Website in 90 Minuten

---

## Inhaltsverzeichnis

1. [Terminal-Befehle zum Ausprobieren](https://github.com/dlemm/html-wtf?tab=readme-ov-file#code-beispiele-zum-nachbauen)
2. [Code-Beispiele zum Nachbauen](https://github.com/dlemm/html-wtf?tab=readme-ov-file#code-beispiele-zum-nachbauen)
3. [HTML Cheat Sheet](https://github.com/dlemm/html-wtf?tab=readme-ov-file#html-cheat-sheet)
4. [CSS Cheat Sheet](https://github.com/dlemm/html-wtf?tab=readme-ov-file#css-cheat-sheet)
5. [JavaScript Cheat Sheet](https://github.com/dlemm/html-wtf?tab=readme-ov-file#javascript-cheat-sheet)
6. [Lernressourcen](https://github.com/dlemm/html-wtf?tab=readme-ov-file#lernressourcen)

---

## Terminal-Befehle zum Ausprobieren

### Grundlegende Netzwerk-Befehle

```bash
# Ping - Teste ob ein Server erreichbar ist
ping google.de

# Traceroute - Zeige die Route deiner Daten durchs Internet
traceroute google.de        # Mac/Linux

# NSLookup - Übersetze Domain-Namen in IP-Adressen
nslookup google.de

# Curl - Lade Webseiten-Inhalte direkt herunter
curl example.com

# Curl - Zeige nur die HTTP-Headers
curl -I google.de
```

### Fun Commands

```bash
# Wetter im Terminal
curl wttr.in/Hamburg

# Party Parrot Animation
curl parrot.live
```

**💡 Tipp:** Alle diese Befehle funktionieren im Terminal (Mac/Linux) oder der PowerShell/CMD (Windows)

---

## Code-Beispiele zum Nachbauen

### Stage 1: Nur HTML (Das Grundgerüst)

Speichere diese Datei als `index.html`:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Meine erste Website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <img src="https://picsum.photos/800/300" alt="Random" />
    <h1>Willkommen auf meiner Website!</h1>
    <p>Ich bin [DEIN NAME] und das ist meine erste selbstgebaute Seite.</p>

    <h2>Über mich</h2>
    <p>Ich lerne gerade Webentwicklung!</p>

    <h2>Meine Interessen</h2>
    <ul>
      <li>Webdesign</li>
      <li>Programmieren</li>
      <li>Kreativität</li>
    </ul>

    <button>Klick mich!</button>
  </body>
</html>
```

**So öffnest du die Datei:**

- Doppelklick auf die HTML-Datei
  ODER
- Drag & Drop in deinen Browser
  ODER
- Rechtsklick → "Öffnen mit" → Browser auswählen
  ODER
- Im Terminal `open index.html` (Mac)

### Stage 2: HTML + CSS (Jetzt wird's schön!)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  padding: 50px;
  margin: 0;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-repeat: no-repeat;
}

h1 {
  font-size: 48px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h2 {
  color: #ffd700;
  font-size: 32px;
  margin-top: 40px;
  margin-bottom: 15px;
}

p {
  margin: 20px auto;
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
}

button {
  padding: 15px 40px;
  margin-top: 30px;
  color: white;
  background-color: #ff6b6b;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

button:hover {
  background-color: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

img {
  max-width: 100%;
  margin: 20px 0;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}
```

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meine erste Website</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Willkommen auf meiner Website!</h1>
    <p>Ich bin [DEIN NAME] und das ist meine erste selbstgebaute Seite.</p>

    <h2>Über mich</h2>
    <p>Ich lerne gerade Webentwicklung und es macht richtig Spaß! 🚀</p>

    <h2>Meine Interessen</h2>
    <ul>
      <li>Webdesign</li>
      <li>Programmieren</li>
      <li>Kreativität</li>
    </ul>

    <img src="https://picsum.photos/400/300" alt="Ein schönes Bild" />

    <button>Klick mich!</button>
  </body>
</html>
```

---

### Stage 3: HTML + CSS + JavaScript (Jetzt wird's interaktiv!)

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meine erste Website</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Willkommen auf meiner Website!</h1>
    <p id="intro">
      Ich bin [DEIN NAME] und das ist meine erste selbstgebaute Seite.
    </p>

    <h2>Über mich</h2>
    <p>Ich lerne gerade Webentwicklung und es macht richtig Spaß! 🚀</p>

    <h2>Meine Interessen</h2>
    <ul>
      <li>Webdesign</li>
      <li>Programmieren</li>
      <li>Kreativität</li>
    </ul>

    <img src="https://picsum.photos/400/300" alt="Ein schönes Bild" />

    <h2>Interaktive Features</h2>
    <button onclick="sagHallo()">Sag Hallo! 👋</button>
    <button onclick="changeColor()">Farbe ändern 🎨</button>
    <button onclick="changeImage()">Neues Bild 🖼️</button>

    <p id="counter">Geklickt: 0 mal</p>
    <button onclick="countClicks()">Zähler erhöhen ➕</button>

    <script>
      // === JAVASCRIPT FUNKTIONEN === //

      // Funktion 1: Begrüßung
    </script>
  </body>
</html>
```

```javascript
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
  img.src = "https://picsum.photos/400/300?random=" + randomId;
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
```

---

## HTML Cheat Sheet

### Grundstruktur

```html
<!DOCTYPE html>
<!-- Dokumenttyp-Deklaration -->
<html lang="de">
  <!-- HTML-Wurzelelement -->
  <head>
    <!-- Kopfbereich (unsichtbar) -->
    <meta charset="UTF-8" />
    <!-- Zeichenkodierung -->
    <title>Titel</title>
    <!-- Tab-Titel -->
  </head>
  <body>
    <!-- Sichtbarer Inhalt -->
    <!-- Hier kommt dein Content -->
  </body>
</html>
```

### Wichtige HTML-Tags

| Tag               | Beschreibung                         | Beispiel                                  |
| ----------------- | ------------------------------------ | ----------------------------------------- |
| `<h1>` bis `<h6>` | Überschriften (1=größte, 6=kleinste) | `<h1>Hauptüberschrift</h1>`               |
| `<p>`             | Absatz                               | `<p>Ein Textabsatz</p>`                   |
| `<a>`             | Link                                 | `<a href="url">Text</a>`                  |
| `<img>`           | Bild                                 | `<img src="bild.jpg" alt="Beschreibung">` |
| `<button>`        | Button                               | `<button>Klick mich!</button>`            |
| `<div>`           | Container (Block)                    | `<div>Inhalt</div>`                       |
| `<span>`          | Container (Inline)                   | `<span>Text</span>`                       |
| `<ul>`            | Ungeordnete Liste                    | `<ul><li>Punkt 1</li></ul>`               |
| `<ol>`            | Geordnete Liste                      | `<ol><li>Punkt 1</li></ol>`               |
| `<li>`            | Listen-Element                       | `<li>Listenpunkt</li>`                    |
| `<br>`            | Zeilenumbruch                        | `Zeile 1<br>Zeile 2`                      |
| `<hr>`            | Horizontale Linie                    | `<hr>`                                    |
| `<strong>`        | Fetter Text                          | `<strong>Wichtig</strong>`                |
| `<em>`            | Kursiver Text                        | `<em>Betont</em>`                         |

### Wichtige Attribute

```html
<!-- ID (einzigartig pro Seite) -->
<div id="meine-id">Content</div>

<!-- Class (wiederverwendbar) -->
<div class="meine-klasse">Content</div>

<!-- Mehrere Klassen -->
<div class="klasse1 klasse2 klasse3">Content</div>

<!-- Style (Inline-CSS) -->
<p style="color: red;">Roter Text</p>

<!-- Event Handler -->
<button onclick="meineFunction()">Klick</button>
```

---

## CSS Cheat Sheet

### CSS einbinden

```html
<!-- Methode 1: Inline (nicht empfohlen) -->
<p style="color: red;">Text</p>

<!-- Methode 2: Internal (im <head>) -->
<style>
  p {
    color: red;
  }
</style>

<!-- Methode 3: External (separate Datei) -->
<link rel="stylesheet" href="style.css" />
```

### Selektoren

```css
/* Element-Selektor */
p {
  color: blue;
}

/* Class-Selektor */
.meine-klasse {
  color: red;
}

/* ID-Selektor */
#meine-id {
  color: green;
}

/* Mehrere Selektoren */
h1,
h2,
h3 {
  font-weight: bold;
}

/* Verschachtelt */
div p {
  color: purple;
}

/* Kind-Selektor */
div > p {
  color: orange;
}

/* Pseudo-Klassen */
button:hover {
  background: red;
}
a:visited {
  color: purple;
}
input:focus {
  border: 2px solid blue;
}
```

### Wichtige Properties

#### Farben & Hintergründe

```css
color: red; /* Textfarbe */
color: #ff0000; /* Hex-Code */
color: rgb(255, 0, 0); /* RGB */
color: rgba(255, 0, 0, 0.5); /* RGB mit Transparenz */

background-color: blue; /* Hintergrundfarbe */
background-image: url("bild.jpg"); /* Hintergrundbild */
background: linear-gradient(to right, red, blue); /* Verlauf */
```

#### Text

```css
font-size: 16px; /* Schriftgröße */
font-weight: bold; /* Fettdruck */
font-family: Arial, sans-serif; /* Schriftart */
text-align: center; /* Ausrichtung */
text-decoration: underline; /* Unterstreichung */
text-transform: uppercase; /* Großbuchstaben */
line-height: 1.5; /* Zeilenhöhe */
letter-spacing: 2px; /* Buchstabenabstand */
```

#### Box Model

```css
width: 200px; /* Breite */
height: 100px; /* Höhe */
max-width: 500px; /* Maximale Breite */
min-height: 200px; /* Minimale Höhe */

padding: 20px; /* Innenabstand (alle Seiten) */
padding: 10px 20px; /* oben/unten links/rechts */
padding: 10px 20px 15px 25px; /* oben rechts unten links */

margin: 20px; /* Außenabstand */
margin: 0 auto; /* Horizontal zentrieren */

border: 2px solid black; /* Rahmen */
border-radius: 10px; /* Abgerundete Ecken */
border-radius: 50%; /* Kreis */
```

#### Layout

```css
display: block; /* Block-Element */
display: inline; /* Inline-Element */
display: inline-block; /* Hybrid */
display: flex; /* Flexbox */
display: grid; /* Grid */
display: none; /* Verstecken */

position: relative; /* Relative Positionierung */
position: absolute; /* Absolute Positionierung */
position: fixed; /* Fixiert beim Scrollen */

top: 10px;
left: 20px;
right: 30px;
bottom: 40px;
```

#### Effekte & Animationen

```css
opacity: 0.5; /* Transparenz (0-1) */
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Schatten */
text-shadow: 1px 1px 2px black; /* Textschatten */
transform: rotate(45deg); /* Rotation */
transform: scale(1.2); /* Skalierung */
transform: translateX(50px); /* Verschiebung */

transition: all 0.3s ease; /* Weiche Übergänge */
cursor: pointer; /* Mauszeiger ändern */
```

### Die CSS-Kaskade (Spezifität)

```
!important     = 10000 Punkte  ("NIE" BENUTZEN!)
Inline Style   = 1000 Punkte   <div style="...">
ID             = 100 Punkte    #meine-id
Class          = 10 Punkte     .meine-klasse
Element        = 1 Punkt       div, p, h1
```

**Beispiel:**

```css
p {
  color: blue;
} /* Spezifität: 1 */
.text {
  color: red;
} /* Spezifität: 10 */
#wichtig {
  color: green;
} /* Spezifität: 100 */
```

→ Grün gewinnt!

---

## JavaScript Cheat Sheet

### Variablen

```javascript
// Moderne Variablen-Deklaration (immer nutzen!)
let name = "Max"; // Veränderbar
const alter = 25; // Konstant (nicht veränderbar)

// Alt (nicht mehr nutzen!)
var stadt = "Hamburg"; // Veraltet
```

### Datentypen

```javascript
// String (Text)
let text = "Hallo Welt";
let text2 = "Auch ein String";
let text3 = `Template String mit ${name}`;

// Number (Zahlen)
let zahl = 42;
let komma = 3.14;

// Boolean (Wahr/Falsch)
let istWahr = true;
let istFalsch = false;

// Array (Liste)
let farben = ["rot", "grün", "blau"];
let zahlen = [1, 2, 3, 4, 5];

// Object (Objekt)
let person = {
  name: "Anna",
  alter: 30,
  stadt: "Berlin",
};
```

### Funktionen

```javascript
// Funktion deklarieren
function sagHallo() {
  alert("Hallo!");
}

// Funktion mit Parameter
function gruesse(name) {
  alert("Hallo " + name + "!");
}

// Funktion mit Rückgabewert
function addiere(a, b) {
  return a + b;
}

// Funktion aufrufen
sagHallo();
gruesse("Max");
let summe = addiere(5, 3); // summe = 8

// Arrow Function (moderne Syntax)
const multiply = (a, b) => a * b;
```

### DOM-Manipulation

```javascript
// Element auswählen
document.getElementById("meine-id"); // Nach ID
document.querySelector(".meine-klasse"); // Erster Treffer
document.querySelectorAll("p"); // Alle Treffer

// Element ändern
element.textContent = "Neuer Text"; // Text ändern
element.innerHTML = "<strong>HTML</strong>"; // HTML ändern
element.style.color = "red"; // Style ändern
element.classList.add("aktiv"); // Klasse hinzufügen
element.classList.remove("inaktiv"); // Klasse entfernen
element.classList.toggle("sichtbar"); // Klasse an/aus

// Element erstellen
let neuesElement = document.createElement("div");
neuesElement.textContent = "Ich bin neu!";
document.body.appendChild(neuesElement);
```

### Events

```javascript
// Click-Event
button.addEventListener("click", function () {
  alert("Button geklickt!");
});

// Mehrere Events
element.addEventListener("mouseover", function () {
  this.style.backgroundColor = "yellow";
});

element.addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
});

// Keyboard-Event
document.addEventListener("keydown", function (event) {
  console.log("Taste gedrückt: " + event.key);
});
```

### Bedingungen

```javascript
// If-Else
if (alter >= 18) {
    console.log("Volljährig");
} else {
    console.log("Minderjährig");
}

// Vergleichsoperatoren
if (a === b)   // Gleich (mit Typ-Check)
if (a !== b)   // Ungleich
if (a > b)     // Größer als
if (a < b)     // Kleiner als
if (a >= b)    // Größer oder gleich
if (a <= b)    // Kleiner oder gleich
```

### Schleifen

```javascript
// For-Schleife
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Array durchlaufen
let farben = ["rot", "grün", "blau"];
for (let farbe of farben) {
  console.log(farbe);
}

// Array.forEach
farben.forEach(function (farbe) {
  console.log(farbe);
});
```

### Nützliche Methoden

```javascript
// String-Methoden
text.length; // Länge
text.toUpperCase(); // GROSSBUCHSTABEN
text.toLowerCase(); // kleinbuchstaben
text.includes("Wort"); // Enthält?
text.replace("alt", "neu"); // Ersetzen

// Array-Methoden
array.push("neu"); // Am Ende hinzufügen
array.pop(); // Letztes Element entfernen
array.length; // Anzahl Elemente
array.includes("wert"); // Enthält?

// Math-Objekt
Math.random(); // Zufallszahl 0-1
Math.floor(3.7); // Abrunden → 3
Math.ceil(3.2); // Aufrunden → 4
Math.round(3.5); // Runden → 4
```

### Console-Befehle (zum Debuggen)

```javascript
console.log("Normaler Text");
console.error("Fehlermeldung");
console.warn("Warnung");
console.table([1, 2, 3]);
console.clear(); // Console leeren
```

---

## Lernressourcen

### Interaktive Tutorials

| Ressource           | Beschreibung                           | Link                                                   |
| ------------------- | -------------------------------------- | ------------------------------------------------------ |
| **W3Schools**       | Umfassende Tutorials mit Live-Editoren | [w3schools.com](https://www.w3schools.com)             |
| **MDN Web Docs**    | Die offizielle Dokumentation           | [developer.mozilla.org](https://developer.mozilla.org) |
| **freeCodeCamp**    | Komplette Kurse, 100% kostenlos        | [freecodecamp.org](https://www.freecodecamp.org/news/) |
| **JavaScript.info** | Modernes JavaScript lernen             | [javascript.info](https://javascript.info)             |
| **Codecademy**      | Strukturierte Lernpfade                | [codecademy.com](https://www.codecademy.com)           |

### Spielerisch Lernen

| Spiel              | Was lernst du?    | Link                                             |
| ------------------ | ----------------- | ------------------------------------------------ |
| **CSS Diner**      | CSS Selektoren    | [flukeout.github.io](https://flukeout.github.io) |
| **Flexbox Froggy** | CSS Flexbox       | [flexboxfroggy.com](https://flexboxfroggy.com)   |
| **Grid Garden**    | CSS Grid          | [cssgridgarden.com](https://cssgridgarden.com)   |
| **CSS Battle**     | CSS Challenges    | [cssbattle.dev](https://cssbattle.dev)           |
| **JS Hero**        | JavaScript Basics | [jshero.net](https://www.jshero.net)             |

### Design-Inspiration & Tools

| Tool             | Zweck                         | Link                                         |
| ---------------- | ----------------------------- | -------------------------------------------- |
| **Coolors**      | Farbpaletten generieren       | [coolors.co](https://coolors.co)             |
| **Google Fonts** | Kostenlose Schriftarten       | [fonts.google.com](https://fonts.google.com) |
| **Unsplash**     | Kostenlose Bilder             | [unsplash.com](https://unsplash.com)         |
| **CodePen**      | Code teilen & erkunden        | [codepen.io](https://codepen.io)             |
| **Can I Use**    | Browser-Kompatibilität prüfen | [caniuse.com](https://caniuse.com)           |

### Deployment (Website online stellen)

| Service          | Besonderheit                                | Link                                                 |
| ---------------- | ------------------------------------------- | ---------------------------------------------------- |
| **Netlify Drop** | Drag & Drop, instant online für eine Stunde | [app.netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Kostenlos, für immer                        | [pages.github.com](https://pages.github.com)         |

### Communities & Support
- **Reddit:** [r/webdev](https://www.reddit.com/r/webdev/), [r/learnprogramming](https://www.reddit.com/r/learnprogramming)
- **Stack Overflow:** [stackoverflow.com](https://stackoverflow.com)

---

## 🎮 Easter Eggs & Fun {#easter-eggs}

### Browser Easter Eggs

Öffne Google und suche nach:

```
do a barrel roll
askew
blink html
the answer to life the universe and everything
```

### Browser-Spiele

```
chrome://dino        (Chrome Dino-Game)
about:robots         (Firefox Easter Egg)
edge://surf          (Edge Surf-Game)
```

### DevTools-Tricks

Öffne die Browser-Console (F12 → Console) und probiere:

```javascript
// Seite auf den Kopf stellen
document.body.style.transform = "rotate(180deg)";

// Alle Bilder schwarz-weiß machen
document.querySelectorAll("img").forEach((img) => {
  img.style.filter = "grayscale(100%)";
});

// Alle Links lila färben
document.querySelectorAll("a").forEach((link) => {
  link.style.color = "purple";
});

// Matrix-Regen (schnell mehrmals ausführen!)
setInterval(() => {
  console.log(Math.random().toString(36).substring(7));
}, 10);
```

## 🎯 Projektideen für danach

### Anfänger

1. **Portfolio-Seite** - Stelle dich vor
2. **Landing Page** - Für ein fiktives Produkt
3. **To-Do Liste** - Mit Add/Remove Funktionen
4. **Taschenrechner** - Einfache Berechnungen

### Fortgeschritten

5. **Weather App** - Mit API-Integration
6. **Quiz-App** - Multiple Choice mit Punktzählung
7. **Memory-Spiel** - Karten aufdecken und merken
8. **Blog** - Mit mehreren Seiten und Navigation

### Challenge

9. **Clone einer bekannten Website** - Lerne durch Nachbauen
10. **Dein eigenes Tool** - Was würde DIR das Leben leichter machen?

---

## 📞 Kontakt & Feedback

**Dennis Lemm**

- 📧 Fragen? Schreib mir!

---

## 📝 Checkliste für dein nächstes Projekt

- [ ] HTML-Grundstruktur erstellt
- [ ] CSS eingebunden
- [ ] Mindestens eine Überschrift (`<h1>`)
- [ ] Mindestens ein Absatz (`<p>`)
- [ ] Mindestens ein Bild (`<img>`)
- [ ] Mindestens ein Button (`<button>`)
- [ ] Button hat eine Funktion (JavaScript)
- [ ] Farben und Schriftarten angepasst
- [ ] Responsive (sieht auf Handy gut aus)
- [ ] Im Browser getestet
- [ ] Code ist kommentiert
- [ ] **Stolz auf das Ergebnis!** 🎉

---

## 🚀 Abschließende Worte

**Du hast es geschafft!**

Du kennst jetzt die drei Grundbausteine des Webs:

- **HTML** = Das Gerüst (die Matroschka)
- **CSS** = Das Styling (der Wasserfall)
- **JavaScript** = Die Interaktivität (die Superkräfte)

Das Internet ist nicht mehr mysteriös – es sind einfach Dateien, die Computer austauschen.

**Was jetzt?**

1. Experimentiere weiter mit deiner Website
2. Schau dir Websites an, die du magst (Rechtsklick → Seitenquelltext)
3. Baue etwas, das DIR Spaß macht

Viel Erfolg auf deiner Reise! 🚀

---
