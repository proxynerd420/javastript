const { color, format, reset } = require('./Colors')

function showTitle() {
    console.clear();
    console.log(`${color.weinrot}`,
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
        ${color.dunkelgrün}╚${`═`.repeat(32) + `${format.bold} \xA9 proxynerd 2024 ${reset.format}` + `═`.repeat(32)}╝`);
        console.log(`${reset.all}`); // Farbe zurücksetzen
        console.log(`${color.dunkelgrün}Ein einfaches Quiz zum Thema JavaScript, HTML und CSS. Viel Spaß damit!\nVergesst nicht, am Ende euren Namen einzutragen für den Highscore.${reset.all}\n`);
};

module.exports = showTitle;