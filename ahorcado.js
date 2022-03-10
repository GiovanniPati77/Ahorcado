let div = document.getElementById("palabras");
let botonIniciar = document.querySelector("#iniciar-juego");
let botonVolveAJugar = document.querySelector("#volver-a-jugar");

// lista palabras
let palabras = [
  "elefante",
  "zorro",
  "caballo",
  "perro",
  "computador",
  "manzana",
  "edificio",
  "cabeza",
  "viaje",
  "futbol",
  "estrella",
  "planeta",
];
let palabraElegida = "";
let palabrasCorrectas = [];
let palabrasIncorrectas = [];
let numIntentos = 7;

// palabras aleatorias y guiones
let ramdom = palabras[Math.floor(Math.random() * palabras.length)];
let split = ramdom.split("");
let palabraConGuiones = ramdom.replace(/./g, "_ ");

botonIniciar.addEventListener("click", (event) => {
  event.defaultPrevented;
  guiones();
  letras();
  teclas();
  linea(40, 650);
  linea(400, 50);
  window.scroll({
    top: 700,
  });
});

function letras() {
  split.forEach((el) => {
    let nuevaLi = document.createElement("ul");
    div.appendChild(nuevaLi);
    palabrasCorrectas.push(el);
  });
}
function guiones() {
  let guion = (document.querySelector("#output").innerHTML = palabraConGuiones);
  addEventListener("keyup", (event) => {
    let palabraElegida = event.key;
    String.prototype.replaceAt = function (index, character) {
      return (
        this.substr(0, index) +
        character +
        this.substr(index + character.length)
      );
    };

    for (const i in split) {
      if (palabraElegida == split[i]) {
        palabraConGuiones = palabraConGuiones.replaceAt(i * 2, palabraElegida);
      }
    }

    if (palabraConGuiones.indexOf("_") < 0) {
      imprimirLetras("Has ganado!!", 300, 600, "green");
      volverAJugar();
      window.scroll({
        top: 800,
      });
    }
    guion = document.querySelector("#output").innerHTML = palabraConGuiones;
  });
}

function teclas() {
  addEventListener("keypress", (event) => {
    let palabraElegida = event.key;

    if (!palabrasCorrectas.includes(palabraElegida)) {
      numIntentos -= 1;
      palabrasIncorrectas.push(palabraElegida.toUpperCase());
      imprimirLetras(palabrasIncorrectas, 500, 400, "red");
    }
    if (numIntentos < 7) {
      cabeza();
    }
    if (numIntentos < 6) {
      cuerpo();
    }
    if (numIntentos < 5) {
      brazoDerecho();
    }
    if (numIntentos < 4) {
      brazoIzquierdo();
    }
    if (numIntentos < 3) {
      piernaDerecha();
    }
    if (numIntentos < 2) {
      piernaIzquierda();
    }
    if (numIntentos < 1) {
      alert(`la letra era ${palabrasCorrectas}`);
      imprimirLetras("Fatallity!!!", 300, 600, "red");
      volverAJugar();
      window.scroll({
        top: 800,
      });
    }
  });
}

//Boton volver a jugar
function volverAJugar() {
  divBoton = document.createElement("div");
  boton = document.createElement("button");
  divBoton.setAttribute("class", "div-boton");
  boton.setAttribute("id", "boton");
  boton.type = "button";
  boton.innerText = "Volver a jugar";
  document.body.appendChild(divBoton);
  divBoton.appendChild(boton);
  let button = document.querySelector("#boton");
  button.addEventListener("click", (event) => {
    event.preventDefault;
    location.reload();
    window.scroll({
      top: 5,
    });
  });
}

function nuevaPalabra() {
  let agregarPalabra = document.getElementById("input-nueva-palabra");
  let btnAgregar = document.querySelector("#nueva-palabra");
  btnAgregar.addEventListener("click", () => {
    guiones();
    letras();
    teclas();
    linea(40, 650);
    linea(400, 50);
    window.scroll({
      top: 700,
    });
    localStorage.setItem("palabras", agregarPalabra.value);
    let recuperar = localStorage.getItem("palabras");
    split.push(recuperar);
    if (agregarPalabra) {
      alert("Palabra ingresada");
    } 
  });
}
nuevaPalabra();
