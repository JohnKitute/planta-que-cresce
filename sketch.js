let textoPlanta = "🪴"
let tamanhoTexto = 100


function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER); // Centraliza o texto
  textSize(tamanhoTexto);
}

function draw() {
  background("orange");
  textSize(tamanhoTexto); // Aplica o tamanho atual do texto
  text(textoPlanta, width / 2, height / 1.5); // Desenha o texto no centro
    let textodialogo = "Aperte na planta para ela crescer!"
textAlign(CENTER, BOTTOM);
  textSize(16);
    text(textodialogo, width / 2, height / 1); // Desenha o texto atual
}

function mouseClicked() {
    let larguraTexto = textWidth(textoPlanta);
  let alturaTexto = textAscent() + textDescent(); // Altura aproximada do texto
  
  let xTexto = width / 2;
  let yTexto = height / 2;
if (mouseX > xTexto - larguraTexto / 2 &&
      mouseX < xTexto + larguraTexto / 2 &&
      mouseY > yTexto - alturaTexto / 2 &&
      mouseY < yTexto + alturaTexto / 2) {
    if (textoPlanta.includes("🪴")) {
      tamanhoTexto += 1;
}
}
}
