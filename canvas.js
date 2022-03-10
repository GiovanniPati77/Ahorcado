var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");

// linea vertical y horizontal de la base

function linea(x, y) {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(x, y);
  pincel.lineTo(40, 50);
  pincel.lineTo(40, 60);
  pincel.stroke();

  // base triangulo
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(-20, 690);
  pincel.lineTo(40, 650);
  pincel.lineTo(100, 678);
  pincel.stroke();

  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(400, 47);
  pincel.lineTo(400, 50);
  pincel.lineTo(400, 140);
  pincel.stroke();

  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(100, 680);
  pincel.lineTo(0, 680);
  pincel.stroke();
}
// linea(40, 650);
// linea(400, 50);

function imprimirLetras(palabra, x, y,color) {
  
  pincel.fillStyle = color;
  pincel.font = "bold 60px 'Courier New', Courier, monospace";
  pincel.beginPath();
  pincel.fillText(palabra, x , y);
}
// pincel.fillText(letra, 300, 601)


// cabeza
function cabeza() {
  pincel.fillStyle = "black";
  pincel.lineWidth = 6;
  pincel.beginPath();
  pincel.arc(400, 190, 50, 0, 2 * 3.14);
  pincel.stroke();
}
// cabeza()

//ahorcado cabeza y cuerpo
function cuerpo() {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(400, 380);
  pincel.lineTo(400, 240);
  pincel.stroke();
}
// cuerpo();

function brazoDerecho() {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(300, 280);
  pincel.lineTo(400, 240);
  pincel.stroke();
}
// brazoDerecho()

function brazoIzquierdo() {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(500, 280);
  pincel.lineTo(400, 240);
  pincel.stroke();
}
// brazoIzquierdo()

function piernaDerecha() {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(300, 450);
  pincel.lineTo(400, 375);
  pincel.stroke();
}
// piernaDerecha()

function piernaIzquierda() {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.lineWidth = 6;
  pincel.moveTo(500, 450);
  pincel.lineTo(400, 375);
  pincel.stroke();
}
// piernaIzquierda()
