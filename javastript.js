console.clear(); // Konsole löschen

const readline = require('readline'); // Einbinden des readline-Moduls zum Lesen von Benutzereingaben
const { color, format, reset, comb } = require('./helpers/Colors.js'); // Einbinden von Farb- und Formatierungshilfen
const showTitle = require('./helpers/Title.js'); // Einbinden der Funktion zur Anzeige des Titels
const { readHighscores, writeHighscores, addHighscore, displayHighscores } = require('./helpers/Highscore.js'); // Einbinden der Highscore-Funktionen

// Einbinden der Fragen zu JavaScript, HTML und CSS
const questionsJS = require('./helpers/Questions.js'); // JavaScript-Fragen
const questionsHTML = require('./helpers/QuestionsHTML.js'); // HTML-Fragen
const questionsCSS = require('./helpers/QuestionsCSS.js'); // CSS-Fragen

// Definition der Kategorien mit Name, Fragen und Farbe
const categories = {
    '1': { name: 'JavaScript', questions: questionsJS, color: color.gold },
    '2': { name: 'HTML', questions: questionsHTML, color: color.tomatenrot },
    '3': { name: 'CSS', questions: questionsCSS, color: color.stahlblau }
};

let playerName = ''; // Variable für den Spielernamen

// Puzzle-Klasse zur Verwaltung der Fragen
class Puzzle {
    constructor(questions) {
        this.questions = questions; // Fragen für die Kategorie
        this.usedIndices = []; // Verwendete Fragenindizes
    }

    // Funktion zur zufälligen Auswahl einer Frage
    getRandomPuzzle() {
        let randomIndex = Math.floor(Math.random() * this.questions.length); // Zufälliger Index
        
        // Sicherstellen, dass jede Frage nur einmal verwendet wird
        while (this.usedIndices.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * this.questions.length);
        }
        
        this.usedIndices.push(randomIndex); // Hinzufügen des verwendeten Index
        return this.questions[randomIndex]; // Zurückgeben der ausgewählten Frage
    }
}

// Erstellen des readline-Interfaces zum Lesen der Eingaben
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funktion, um Texte Buchstabe für Buchstabe anzuzeigen
function typeWriter(text, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            process.stdout.write(text.charAt(i)); // Einzelne Zeichen ausgeben
            i++;
            setTimeout(typing, Math.floor(Math.random() * (200 - 25 + 1)) + 25); // Zufälliges Timeout zwischen 25 und 200 ms
        } else if (callback) {
            callback(); // Callback aufrufen, wenn der Text vollständig ausgegeben wurde
        }
    }
    typing();
}

// Funktion zum Starten des Spiels basierend auf der gewählten Kategorie
function startGame(categoryKey) {
    const category = categories[categoryKey]; // Gewählte Kategorie
    const puzzleGame = new Puzzle(category.questions); // Erstellen des Puzzle-Spiels mit den Fragen der Kategorie
    let score = 0; // Punktestand
    let questionCount = 0; // Anzahl der gestellten Fragen
    const maxQuestions = 20; // Maximale Anzahl der Fragen

    // Funktion, um eine Frage zu stellen
    function askQuestion() {
        if (questionCount < maxQuestions) {
            const puzzle = puzzleGame.getRandomPuzzle(); // Zufällige Frage holen
            typeWriter(puzzle.question + ' ', () => { // Frage anzeigen
                rl.question('', (answer) => { // Benutzereingabe lesen
                    if (answer.trim().toLowerCase() === puzzle.answer.toLowerCase()) {
                        console.log(`${comb.grBo}\nRichtig!\n${reset.all}`); // Richtig
                        score++;
                    } else {
                        console.log(`${comb.reBo}\nFalsch!${reset.all} Die richtige Antwort ist: ${comb.blBo}${puzzle.answer}\n${reset.all}`); // Falsch
                    }
                    questionCount++; // Fragezähler erhöhen
                    askQuestion(); // Nächste Frage stellen
                });
            });
        } else {
            let scoreColor;
            if (score <= 7) {
                scoreColor = comb.reBo; // Rot für Score <= 7
            } else if (score >= 8 && score <= 14) {
                scoreColor = comb.yeBo; // Gelb für Score zwischen 8 und 14
            } else {
                scoreColor = comb.grBo; // Grün für Score ab 15 bis 20
            }

            console.log(`${scoreColor}Spiel beendet!${reset.all} Du hast ${scoreColor}${score}${reset.all} von ${comb.grBo}${maxQuestions}${reset.all} Fragen richtig beantwortet.`); // Spielende

            rl.question('\nBitte gib deinen Namen für die Highscore-Liste ein: ', (playerName) => { // Spielernamen für Highscore abfragen
                addHighscore(category.name, playerName.trim(), score); // Highscore hinzufügen
                askReplay(); // Frage nach erneutem Spiel
            });
        }
    }

    // Spiel starten
    askQuestion();
}

// Funktion, um die Kategorie der Fragen auszuwählen
function chooseCategory() {
    typeWriter(`Wähle eine Kategorie aus:\n`, () => { // Aufforderung zur Kategorienwahl
        let categoryText = '';
        Object.keys(categories).forEach(key => {
            const category = categories[key];
            displayHighscores(category.name); // Highscores für jede Kategorie anzeigen
            categoryText += `${category.color}${format.bold}${key}. ${category.name}${reset.all}\n`; // Kategorien auflisten
        });
        typeWriter(categoryText, () => {
            rl.question('Bitte wähle die Nummer der gewünschten Kategorie: ', (answer) => { // Benutzereingabe lesen
                if (categories[answer.trim()]) {
                    const category = categories[answer.trim()];
                    typeWriter(`\nDu hast dich für ${category.color}${format.bold}${category.name}${reset.all} entschieden!\n`, () => {
                        startGame(answer.trim()); // Spiel mit gewählter Kategorie starten
                    });
                } else {
                    typeWriter(`${comb.reBo}Ungültige Eingabe. Bitte wähle eine Nummer zwischen 1 und ${Object.keys(categories).length}!${reset.all}\n`, chooseCategory); // Ungültige Eingabe
                }
            });
        });
    });
}

// Funktion, um zu fragen, ob der Spieler eine neue Runde spielen möchte
function askReplay() {
    rl.question('Möchtest du noch eine Runde spielen? (ja/nein): ', (answer) => { // Frage nach erneutem Spiel
        if (answer.trim().toLowerCase() === 'ja') {
            chooseCategory(); // Neue Kategorie wählen
        } else {
            console.log(`\nDanke fürs Spielen!\nBis zum nächsten Mal!`); // Spiel beenden
            rl.close();
        }
    });
}

// Titel anzeigen und Kategorie wählen
showTitle(); // Titel anzeigen
chooseCategory(); // Kategorienauswahl starten
