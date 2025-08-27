let variable = "Esto es una variable";
const constante = "Esto es una constante";

variable = "Cambie la variable";
//constante = "Cambie la constante";

console.log(variable);
console.log(constante);

let validar = 11
if (validar < 10) {
    console.log("La variable es menor de 10");
} else if (validar > 10) {
    console.log("La variable es mayor de 10");
} else {
    console.log("La variable es igual de 10");
}

for (let i = 1; i <= 5; i++) {
    console.log("La variable i es: " + i);
}

let dia = 2;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    default:
        console.log("Entonces es otro dia");
        break;
}

let contador = 1;
while (contador<=5) {
    console.log("La variable contador es: " + contador);
    contador++;
}

let numero = 1;
do {
    console.log("La variable numero es: " + numero);
    numero++;
} while (numero <= 5);

function saludar(nombre){
    return "Hola " + nombre
}
console.log(saludar("Maria"));

//Boton Suma:
let nun1 = document.getElementById("num1");
let nun2 = document.getElementById("num2");
let btnSuma = document.getElementById("btnSuma");
let resultadoSuma = document.getElementById("resultadoSuma");

function suma(a,b){
    return a+b;
}

btnSuma.addEventListener("click", () =>{
    resultadoSuma.innerText = suma(Number(nun1.value),Number(nun2.value));
});

//Cambiar textos
let titulo = document.getElementById("titulo");
let botonTxt = document.getElementById("btnCambiartxt");
let entrada = document.getElementById("entrada");
let salida = document.getElementById("salida");

botonTxt.addEventListener("click", () =>{
    titulo.innerText = "Texto cambiado con JS"
});

entrada.addEventListener("input", () => {
    salida.innerText = "Escribiste: " + entrada.value;
})

let cambiarColor = document.getElementById("eventomouse");

cambiarColor.addEventListener("mouseenter", () => {
    cambiarColor.style.background = "lightblue";
    cambiarColor.innerText = "Entraste al div";
})

cambiarColor.addEventListener("mouseout", () => {
    cambiarColor.style.background = "lightgreen";
    cambiarColor.innerText = "Saliste del div";
})