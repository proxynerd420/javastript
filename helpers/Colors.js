const color = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",

  // eigene farben

  // WWW
  schwarz: "\x1b[38;2;0;0;0m",
  dunkelgrau: "\x1b[38;2;64;64;64m",
  graugrün: "\x1b[38;2;128;128;128m",
  hellgrau: "\x1b[38;2;192;192;192m",
  weiß: "\x1b[38;2;255;255;255m",
  dunkelrot: "\x1b[38;2;128;0;0m",
  rot: "\x1b[38;2;255;0;0m",
  orange: "\x1b[38;2;255;165;0m",
  gelb: "\x1b[38;2;255;255;0m",
  hellgelb: "\x1b[38;2;255;255;224m",
  olivgrün: "\x1b[38;2;128;128;0m",
  hellolivgrün: "\x1b[38;2;192;192;128m",
  dunkelgrün: "\x1b[38;2;0;128;0m",
  grün: "\x1b[38;2;0;255;0m",
  hellgrün: "\x1b[38;2;144;238;144m",
  türkis: "\x1b[38;2;64;224;208m",
  helltürkis: "\x1b[38;2;224;255;255m",
  dunkelcyan: "\x1b[38;2;0;128;128m",
  cyan: "\x1b[38;2;0;255;255m",
  dunkelblau: "\x1b[38;2;0;0;128m",
  blau: "\x1b[38;2;0;0;255m",
  hellblau: "\x1b[38;2;173;216;230m",
  indigoblau: "\x1b[38;2;75;0;130m",
  dunkelviolett: "\x1b[38;2;128;0;128m",
  violett: "\x1b[38;2;238;130;238m",
  magenta: "\x1b[38;2;255;0;255m",
  dunkelmagenta: "\x1b[38;2;139;0;139m",
  rosarot: "\x1b[38;2;255;192;203m",
  dunkelbraun: "\x1b[38;2;139;69;19m",
  braun: "\x1b[38;2;165;42;42m",
  gold: "\x1b[38;2;255;215;0m",
  sandgelb: "\x1b[38;2;244;164;96m",
  beige: "\x1b[38;2;245;245;220m",
  khaki: "\x1b[38;2;240;230;140m",
  koralle: "\x1b[38;2;255;127;80m",
  tomatenrot: "\x1b[38;2;255;99;71m",
  weinrot: "\x1b[38;2;128;0;0m",
  lavendel: "\x1b[38;2;230;230;250m",
  elfenbein: "\x1b[38;2;255;255;240m",
  mintgrün: "\x1b[38;2;189;252;201m",
  aquamarin: "\x1b[38;2;127;255;212m",
  königsblau: "\x1b[38;2;65;105;225m",
  marineblau: "\x1b[38;2;0;0;139m",
  stahlblau: "\x1b[38;2;70;130;180m",
  feuerrot: "\x1b[38;2;178;34;34m",
  karmesinrot: "\x1b[38;2;220;20;60m",
  pfirsich: "\x1b[38;2;255;218;185m",
  pflaume: "\x1b[38;2;221;160;221m",
  himmelblau: "\x1b[38;2;135;206;235m",

  // METALLE
  gold: "\x1b[38;2;219;172;52m",
  kupfer: "\x1b[38;2;184;115;51m",
  eisen: "\x1b[38;2;70;70;70m",
  aluminium: "\x1b[38;2;211;211;211m",
  titan: "\x1b[38;2;135;135;135m",
  nickel: "\x1b[38;2;155;155;155m",
  platin: "\x1b[38;2;229;228;226m",
  zink: "\x1b[38;2;194;206;217m",
  blei: "\x1b[38;2;66;66;66m",
  zinn: "\x1b[38;2;199;193;177m",
  chrom: "\x1b[38;2;130;130;130m",
  magnesium: "\x1b[38;2;176;176;176m",
  kobalt: "\x1b[38;2;0;71;171m",
  lithium: "\x1b[38;2;202;203;205m",
  kalzium: "\x1b[38;2;192;192;192m",
  quecksilber: "\x1b[38;2;184;184;208m",
  iridium: "\x1b[38;2;106;106;112m",
  mangan: "\x1b[38;2;175;177;183m",
  wolfram: "\x1b[38;2;148;142;142m",

  };
  
  const format = {
    bold: "\x1b[1m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
  }
  
  const comb = {
    grBo: `${color.green}${format.bold}`, // Combine green & bold
    reBo: `${color.red}${format.bold}`,
    blBo: `${color.blue}${format.bold}`,
    yeBo: `${color.yellow}${format.bold}`,
    bkBo: `${color.black}${format.bold}`,
  }
  
  const reset = {
    format: `\x1b[22m`,
    color: `\x1b[0m`, // Zurücksetzen auf Standardfarbe
    all: `\x1b[22m\x1b[0m`,
  }
  
  
  
  
  module.exports = { color, format, comb, reset };