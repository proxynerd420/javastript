console.clear();

const readline = require('readline');
const { color, format, reset, comb } = require('./helpers/Colors.js');
const showTitle = require('./helpers/Title.js');
const { readHighscores, writeHighscores, addHighscore, displayHighscores } = require('./helpers/Highscore.js');

// Einbinden der Fragen zu JavaScript, HTML und CSS
const questionsJS = require('./helpers/Questions.js');
const questionsHTML = require('./helpers/QuestionsHTML.js');
const questionsCSS = require('./helpers/QuestionsCSS.js');

const categories = {
    '1': { name: 'JavaScript', questions: questionsJS, color: color.gold },
    '2': { name: 'HTML', questions: questionsHTML, color: color.tomatenrot },
    '3': { name: 'CSS', questions: questionsCSS, color: color.stahlblau }
};

let playerName = '';

class Puzzle {
    constructor(questions) {
        this.questions = questions;
        this.usedIndices = [];
    }

    getRandomPuzzle() {
        let randomIndex = Math.floor(Math.random() * this.questions.length);
        
        // Sicherstellen, dass jede Frage nur einmal verwendet wird
        while (this.usedIndices.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * this.questions.length);
        }
        
        this.usedIndices.push(randomIndex);
        return this.questions[randomIndex];
    }
}

// Erstellen des readline Interface zum Lesen der Eingaben
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funktion, um Texte Buchstabe für Buchstabe anzuzeigen
function typeWriter(text, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            process.stdout.write(text.charAt(i));
            i++;
            setTimeout(typing, Math.floor(Math.random() * (100 - 25 + 1)) + 25); // Zufälliges Timeout zwischen 25 und 100 ms
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// Funktion zum Starten des Spiels basierend auf der gewählten Kategorie
function startGame(categoryKey) {
    const category = categories[categoryKey];
    const puzzleGame = new Puzzle(category.questions);
    let score = 0;
    let questionCount = 0;
    const maxQuestions = 20; // Maximale Anzahl der Fragen, die der Spieler beantworten muss

    // Funktion, um eine Frage zu stellen
    function askQuestion() {
        if (questionCount < maxQuestions) {
            const puzzle = puzzleGame.getRandomPuzzle();
            typeWriter(puzzle.question + ' ', () => {
                rl.question('', (answer) => {
                    if (answer.trim().toLowerCase() === puzzle.answer.toLowerCase()) {
                        console.log(`${comb.grBo}\nRichtig!\n${reset.all}`);
                        score++;
                    } else {
                        console.log(`${comb.reBo}\nFalsch!${reset.all} Die richtige Antwort ist: ${comb.blBo}${puzzle.answer}\n${reset.all}`);
                    }
                    questionCount++;
                    askQuestion();
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

            console.log(`${scoreColor}Spiel beendet!${reset.all} Du hast ${scoreColor}${score}${reset.all} von ${comb.grBo}${maxQuestions}${reset.all} Fragen richtig beantwortet.`);

            rl.question('\nBitte gib deinen Namen für die Highscore-Liste ein: ', (playerName) => {
                addHighscore(category.name, playerName.trim(), score);
                askReplay();
            });
        }
    }

    // Spiel starten
    askQuestion();
}

// Funktion, um die Kategorie der Fragen auszuwählen
function chooseCategory() {
    typeWriter(`Wähle eine Kategorie aus:\n`, () => {
        let categoryText = '';
        Object.keys(categories).forEach(key => {
            const category = categories[key];
            displayHighscores(category.name);
            categoryText += `${category.color}${format.bold}${key}. ${category.name}${reset.all}\n`;
        });
        typeWriter(categoryText, () => {
            rl.question('Bitte wähle die Nummer der gewünschten Kategorie: ', (answer) => {
                if (categories[answer.trim()]) {
                    const category = categories[answer.trim()];
                    typeWriter(`\nDu hast dich für ${category.color}${format.bold}${category.name}${reset.all} entschieden!\n`, () => {
                        startGame(answer.trim());
                    });
                } else {
                    typeWriter(`${comb.reBo}Ungültige Eingabe. Bitte wähle eine Nummer zwischen 1 und ${Object.keys(categories).length}!${reset.all}\n`, chooseCategory);
                }
            });
        });
    });
}

// Funktion, um zu fragen, ob der Spieler eine neue Runde spielen möchte
function askReplay() {
    rl.question('Möchtest du noch eine Runde spielen? (ja/nein): ', (answer) => {
        if (answer.trim().toLowerCase() === 'ja') {
            chooseCategory();
        } else {
            console.log(`\nDanke fürs Spielen!\nBis zum nächsten Mal!`);
            rl.close();
        }
    });
}

// Titel anzeigen und Kategorie wählen
showTitle();
chooseCategory();
