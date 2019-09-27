var demo_elements, colors_count, color_separation;

function init() {
  demo_elements = [
    "website-background",
    "element-text",
    "element-border",
    "element-background",
    "header"
  ]
  colors_count = demo_elements.length;
  color_separation = 360 / colors_count;
}

function randomPalette() {
  let init = Math.floor(Math.random() * 359);
  let colors = [];
  for (let i = 0; i < colors_count; i++) {
    let ccolor = init + (i * color_separation);
    if (ccolor > 359) {
      ccolor = ccolor - 359;
    }
    colors[i] = hsvToRgb(ccolor / 360, 1, 1);
    colors[i].push(ccolor)
  }
  return colors;
  //console.log("A ver!", init, colors);
}



function generateRules() {
  let colors = randomPalette();
  let rules = "";
  colors.map((c, i) => {
    let r = Math.floor(colors[i][0]);
    let g = Math.floor(colors[i][1]);
    let b = Math.floor(colors[i][2]);
    let hex = rgbToHex(r, g, b);
    $("#" + demo_elements[i]).css({ 'background-color': hex });
    rules = rules + `.${demo_elements[i]}{color: ${hex};}\n`;
    if (colors[i][3] > 38 && colors[i][3] < 210) {
      $("#" + demo_elements[i]).css({ 'color': `black` });
    } else {
      $("#" + demo_elements[i]).css({ 'color': `white` });
    }
  })
  $("#css-rules").val(rules);
}

function clearPalette() {
  let rules = "";
  demo_elements.map(e => {
    rules = rules + `.${e}{color: #ffffff;}\n`;
    $("#" + e).css({ 'background-color': `#F3F6FA` });
    $("#" + e).css({ 'color': `black` });
  });
  $("#css-rules").val(rules);
}