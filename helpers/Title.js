const { color, format, reset } = require('./Colors'); // Einbinden von Farb- und Formatierungshilfen

// Funktion zur Anzeige des Titels
function showTitle() {
    console.clear(); // Konsole löschen
    console.log(`${color.weinrot}`, // Setzen der Textfarbe auf weinrot
`
${color.dunkelgrün}╔${`═`.repeat(82)}╗
║╔${`═`.repeat(80)}╗║
║║${color.weinrot}      ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗████████╗██████╗ ██╗██████╗ ████████╗${color.dunkelgrün} ║║
║║${color.weinrot}      ██║██╔══██╗██║   ██║██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║██╔══██╗╚══██╔══╝${color.dunkelgrün} ║║
║║${color.weinrot}      ██║███████║██║   ██║███████║███████╗   ██║   ██████╔╝██║██████╔╝   ██║   ${color.dunkelgrün} ║║
║║${color.weinrot} ██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║   ██║   ██╔══██╗██║██╔═══╝    ██║   ${color.dunkelgrün} ║║
║║${color.weinrot} ╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║   ██║   ██║  ██║██║██║        ██║   ${color.dunkelgrün} ║║
║║${color.weinrot}  ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ${color.dunkelgrün} ║║
║╚${`═`.repeat(80)}╝║
${color.dunkelgrün}╚${`═`.repeat(32) + `${format.bold} \xA9 proxynerd 2024 ${reset.format}` + `═`.repeat(32)}╝
`);
    console.log(`${reset.all}`); // Farbe zurücksetzen
    console.log(`${color.dunkelgrün}Ein einfaches Quiz zum Thema JavaScript, HTML und CSS. Viel Spaß damit!\nVergesst nicht, am Ende euren Namen einzutragen für den Highscore.${reset.all}\n`); // Einführungstext
};

module.exports = showTitle; // Exportieren der Funktion

/*
Erklärung der Zeichenformation:

1. `${color.weinrot}`: Setzt die Textfarbe auf weinrot.
2. `${color.dunkelgrün}╔${`═`.repeat(82)}╗`: Erstellt die obere Rahmenlinie in dunkelgrün mit 82 gleichmäßigen "═"-Zeichen.
3. `║╔${`═`.repeat(80)}╗║`: Erstellt eine innere Rahmenlinie mit 80 "═"-Zeichen in dunkelgrün.
4. `║║${color.weinrot}      ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗████████╗██████╗ ██╗██████╗ ████████╗${color.dunkelgrün} ║║`:
   - Die Textzeile enthält ASCII-Art in weinrot für den Titel JAVASTRIPT.
   - Die ganze Zeile ist eingerahmt in dunkelgrün mit `║║` am Anfang und Ende.
5. Der gleiche Aufbau wird für die nächsten Zeilen wiederholt, wobei die ASCII-Art fortgesetzt wird.
6. `║╚${`═`.repeat(80)}╝║`: Innere untere Rahmenlinie in dunkelgrün.
7. `${color.dunkelgrün}╚${`═`.repeat(32) + `${format.bold} \xA9 proxynerd 2024 ${reset.format}` + `═`.repeat(32)}╝`:
   - Erstellt die untere Rahmenlinie in dunkelgrün.
   - In der Mitte der Linie wird der Text "© proxynerd 2024" in fetter Schrift (format.bold) eingefügt.
   - Die restlichen Zeichen werden wieder mit "═" aufgefüllt, um die Linie symmetrisch zu gestalten.
8. `${reset.all}`: Setzt die Farbe zurück.
9. Ein Einführungstext in dunkelgrün wird angezeigt, gefolgt von einem Hinweis auf das Eintragen des Namens für die Highscore.
*/
