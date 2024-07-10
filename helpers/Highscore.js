const fs = require('fs');
const path = require('path');
const { color, format, reset, comb } = require('./Colors.js');

function getHighscoreFilePath(category) {
    return path.join(__dirname, `highscore_${category}.json`);
}

function readHighscores(category) {
    const highscoreFilePath = getHighscoreFilePath(category);
    if (!fs.existsSync(highscoreFilePath)) {
        return [];
    }
    const data = fs.readFileSync(highscoreFilePath, 'utf8');
    return JSON.parse(data);
}

function writeHighscores(category, highscores) {
    const highscoreFilePath = getHighscoreFilePath(category);
    fs.writeFileSync(highscoreFilePath, JSON.stringify(highscores, null, 2), 'utf8');
}

function addHighscore(category, playerName, score) {
    const highscores = readHighscores(category);
    highscores.push({ name: playerName, score: score });
    highscores.sort((a, b) => b.score - a.score); // Sortieren nach Score
    if (highscores.length > 10) {
        highscores.pop(); // Nur die Top 10 behalten
    }
    writeHighscores(category, highscores);
}

function displayHighscores(category) {
    const highscores = readHighscores(category);
    console.log(`\n${color.platin}${format.bold}TOP 10 - ${category}${reset.all}`);
    highscores.forEach((entry, index) => {
        console.log(`${format.bold}${index + 1}. ${entry.name}${reset.all} - ${comb.grBo}${entry.score} Punkte${reset.all}`);
    });
    console.log('');
}

module.exports = {
    readHighscores,
    writeHighscores,
    addHighscore,
    displayHighscores
};
