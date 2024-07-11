const fs = require('fs'); // Einbinden des File-System Moduls
const path = require('path'); // Einbinden des Path-Moduls
const { color, format, reset, comb } = require('./Colors.js'); // Einbinden von Farb- und Formatierungshilfen

// Funktion zur Ermittlung des Dateipfads für die Highscore-Datei einer Kategorie
function getHighscoreFilePath(category) {
    return path.join(__dirname, `highscore_${category}.json`); // Pfad zur Highscore-Datei
}

// Funktion zum Lesen der Highscores einer Kategorie
function readHighscores(category) {
    const highscoreFilePath = getHighscoreFilePath(category); // Ermitteln des Dateipfads
    if (!fs.existsSync(highscoreFilePath)) { // Prüfen, ob die Datei existiert
        return []; // Leeres Array zurückgeben, wenn die Datei nicht existiert
    }
    const data = fs.readFileSync(highscoreFilePath, 'utf8'); // Lesen der Datei
    return JSON.parse(data); // Parsen des JSON-Inhalts und zurückgeben
}

// Funktion zum Schreiben der Highscores einer Kategorie
function writeHighscores(category, highscores) {
    const highscoreFilePath = getHighscoreFilePath(category); // Ermitteln des Dateipfads
    fs.writeFileSync(highscoreFilePath, JSON.stringify(highscores, null, 2), 'utf8'); // Schreiben der Highscores in die Datei
}

// Funktion zum Hinzufügen eines Highscores
function addHighscore(category, playerName, score) {
    const highscores = readHighscores(category); // Lesen der vorhandenen Highscores
    highscores.push({ name: playerName, score: score }); // Neuen Highscore hinzufügen
    highscores.sort((a, b) => b.score - a.score); // Sortieren der Highscores nach Score
    if (highscores.length > 10) {
        highscores.pop(); // Nur die Top 10 behalten
    }
    writeHighscores(category, highscores); // Aktualisierte Highscores in die Datei schreiben
}

// Funktion zur Anzeige der Highscores einer Kategorie
function displayHighscores(category) {
    const highscores = readHighscores(category); // Lesen der Highscores
    console.log(`\n${color.platin}${format.bold}TOP 10 - ${category}${reset.all}`); // Überschrift für die Highscores
    highscores.forEach((entry, index) => { // Durch die Highscores iterieren und anzeigen
        console.log(`${format.bold}${index + 1}. ${entry.name}${reset.all} - ${comb.grBo}${entry.score} Punkte${reset.all}`); // Anzeige eines Highscore-Eintrags
    });
    console.log(''); // Leere Zeile nach den Highscores
}

module.exports = {
    readHighscores,
    writeHighscores,
    addHighscore,
    displayHighscores
}; // Exportieren der Funktionen
