const { color, format, comb } = require('./Colors');

const questions = [
    {
        question: `Verändert der Befehl 'map' das ursprüngliche Array (ja oder nein)?\n`,
        answer: `nein`
    },
    {
        question: `Welche Methode wird verwendet, um ein Element am Ende eines Arrays hinzuzufügen?\n`,
        answer: `push`
    },
    {
        question: `Wie kann man die Anzahl der Elemente in einem Array herausfinden?\n`,
        answer: `length`
    },
    {
        question: `Welche Schleife wird verwendet, um die Eigenschaften eines Objekts zu durchlaufen?\n`,
        answer: `for-in`
    },
    {
        question: `Welches Schlüsselwort wird verwendet, um eine feste Variable zu erstellen, die sich nicht ändert?\n`,
        answer: `const`
    },
    {
        question: `Welches Schlüsselwort wird verwendet, um eine Variable zu erstellen, die später geändert werden kann?\n`,
        answer: `let`
    },
    {
        question: `Welcher Operator wird verwendet, um zu prüfen, ob zwei Werte genau gleich sind?\n`,
        answer: `===`
    },
    {
        question: `Wie wandelt man eine Zeichenkette in eine ganze Zahl um?\n`,
        answer: `parseInt`
    },
    {
        question: `Welche Methode wird verwendet, um eine Zeichenkette in ein Array zu zerlegen?\n`,
        answer: `split`
    },
    {
        question: `Wie fügt man ein Element am Anfang eines Arrays hinzu?\n`,
        answer: `unshift`
    },
    {
        question: `Welches Schlüsselwort wird verwendet, um eine Klasse zu erstellen?\n`,
        answer: `class`
    },
    {
        question: `Welches Schlüsselwort wird verwendet, um eine Bedingung anzugeben?\n`,
        answer: `if`
    },
    {
        question: `Wie nennt man eine Funktion innerhalb einer Klasse?\n`,
        answer: `method`
    },
    {
        question: `Welche Methode wird verwendet, um den Typ einer Variablen zu überprüfen?\n`,
        answer: `typeof`
    },
    {
        question: `Welcher Operator wird verwendet, um zu prüfen, ob zwei Werte ungefähr gleich sind?\n`,
        answer: `==`
    },
    {
        question: `Welche Methode wird verwendet, um die Position eines Elements in einem Array zu finden?\n`,
        answer: `indexOf`
    },
    {
        question: `Welche Methode wird verwendet, um eine Funktion auf jedes Element eines Arrays anzuwenden?\n`,
        answer: `forEach`
    },
    {
        question: `Wie wandelt man eine ganze Zahl in eine Zeichenkette um?\n`,
        answer: `toString`
    },
    {
        question: `Welche Methode wird verwendet, um eine Zeichenkette in Kleinbuchstaben zu ändern?\n`,
        answer: `toLowerCase`
    },
    {
        question: `Wie überprüft man, ob ein Array ein bestimmtes Element enthält?\n`,
        answer: `includes`
    },
    {
        question: `Welches Schlüsselwort wird verwendet, um eine Schleife vorzeitig zu beenden?\n`,
        answer: `break`
    },
    {
        question: `Welche Methode wird verwendet, um zwei oder mehr Arrays zusammenzuführen?\n`,
        answer: `concat`
    },
    {
        question: `Welche Methode wird verwendet, um ein Array in eine Zeichenkette umzuwandeln?\n`,
        answer: `join`
    },
    {
        question: `Welche Methode wird verwendet, um die Reihenfolge der Elemente in einem Array zu ändern?\n`,
        answer: `sort`
    },
    {
        question: `Welcher Operator wird verwendet, um eine Bedingung zu verneinen?\n`,
        answer: `!`
    },
    {
        question: `Welche Methode wird verwendet, um das erste Element eines Arrays zu entfernen und zurückzugeben?\n`,
        answer: `shift`
    },
    {
        question: `Wird eine Variable, die mit 'let' deklariert wurde, automatisch auf 'undefined' gesetzt, wenn kein Wert zugewiesen wird (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Können 'const'-Variablen neu zugewiesen werden (ja oder nein)?\n`,
        answer: `nein`
    },
    {
        question: `Kann eine Funktion in JavaScript ohne Parameter definiert werden (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann ein JavaScript-Objekt Methoden enthalten (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man mit '===' auch den Typ der Variablen vergleichen (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Erlaubt JavaScript das Verschachteln von Funktionen (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann eine 'for-in'-Schleife über die Elemente eines Arrays iterieren (ja oder nein)?\n`,
        answer: `nein`
    },
    {
        question: `Kann man Arrays in JavaScript dynamisch vergrößern (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man die Länge eines Arrays mit der 'length'-Eigenschaft ändern (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Gibt 'typeof null' in JavaScript 'object' zurück (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man in JavaScript Objekte ohne Prototyp erstellen (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man JavaScript-Code außerhalb des Browsers ausführen (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Ist JavaScript dasselbe wie Java (ja oder nein)?\n`,
        answer: `nein`
    },
    {
        question: `Kann man in JavaScript eine Variable ohne das Schlüsselwort 'var', 'let' oder 'const' deklarieren (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man in JavaScript mit einer Funktion ein Objekt als Rückgabewert haben (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Ist 'NaN' in JavaScript ein Zahlenwert (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Können 'if'-Bedingungen in JavaScript auch ohne 'else' geschrieben werden (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man in JavaScript Strings in Arrays umwandeln (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Ist 'undefined' in JavaScript ein Wert (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Verändert die Methode 'filter' das ursprüngliche Array (ja oder nein)?\n`,
        answer: `nein`
    },
    {
        question: `Welche Methode wird verwendet, um ein Element am Anfang eines Arrays zu entfernen?\n`,
        answer: `shift`
    },
    {
        question: `Welche Schleife wird verwendet, um durch jedes Element eines Arrays zu iterieren?\n`,
        answer: `forEach`
    },
    {
        question: `Welcher Operator wird verwendet, um zu prüfen, ob zwei Werte nicht gleich sind?\n`,
        answer: `!==`
    },
    {
        question: `Wie wandelt man eine Zeichenkette in Kleinbuchstaben um?\n`,
        answer: `toLowerCase`
    },
    {
        question: `Welche Methode wird verwendet, um eine Zeichenkette in ein Array von Unterzeichenketten aufzuteilen?\n`,
        answer: `match`
    },
    {
        question: `Kann man in JavaScript eine Variable deklarieren, die nur innerhalb einer Funktion sichtbar ist (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man mit 'typeof' den Typ eines Funktionsaufrufs überprüfen (ja oder nein)?\n`,
        answer: `nein`
    },
    {
        question: `Welches Schlüsselwort wird verwendet, um in einer Schleife zum nächsten Iterationsschritt zu springen?\n`,
        answer: `continue`
    },
    {
        question: `Welche Methode wird verwendet, um die Länge eines Zeichenkette zu ermitteln?\n`,
        answer: `length`
    },
    {
        question: `Ist 'NaN' in JavaScript gleich sich selbst, wenn man es mit '===' vergleicht (ja oder nein)?\n`,
        answer: `nein`
    },
    {
        question: `Kann man in JavaScript Arrays als Schlüssel in einem Objekt verwenden?\n`,
        answer: `nein`
    },
    {
        question: `Erlaubt JavaScript das Definieren von mehreren Variablen in einer einzigen Anweisung?\n`,
        answer: `ja`
    },
    {
        question: `Welches Schlüsselwort wird verwendet, um in JavaScript ein Attribut in einer Klasse zu definieren?\n`,
        answer: `this`
    },
    {
        question: `Kann man in JavaScript eine Funktion als Parameter einer anderen Funktion übergeben?\n`,
        answer: `ja`
    },
    {
        question: `Verändert die Methode 'reduce' das ursprüngliche Array?\n`,
        answer: `nein`
    },
    {
        question: `Welche Methode wird verwendet, um ein Array auf einen einzelnen Wert zu reduzieren?\n`,
        answer: `reduce`
    },
    {
        question: `Kann 'reduce' ohne einen Anfangswert verwendet werden (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man mit 'reduce' die Elemente eines Arrays durchlaufen und eine Summe berechnen?\n`,
        answer: `ja`
    },
    {
        question: `Kann 'reduce' verwendet werden, um ein neues Array zu erzeugen (ja oder nein)?\n`,
        answer: `ja`
    },
    {
        question: `Kann man mit 'reduce' auch ein Objekt erstellen (ja oder nein)?\n`,
        answer: `ja`
    },
];

module.exports = questions;

