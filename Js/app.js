


const tarjeta = document.querySelector("#tarjeta");

const botonAzul = document.querySelector("#azul");
const botonVerde = document.querySelector("#verde");
const botonRojo = document.querySelector("#rojo");
const botonRestablecer = document.querySelector("#restablecer");

botonAzul.addEventListener("click", function() {
    tarjeta.style.backgroundColor = "blue";
});

botonVerde.addEventListener("click", function() {
    tarjeta.style.backgroundColor = "green";
});

botonRojo.addEventListener("click", function() {
    tarjeta.style.backgroundColor = "red";
});

botonRestablecer.addEventListener("click", function() {
    tarjeta.style.backgroundColor = "white";
});
