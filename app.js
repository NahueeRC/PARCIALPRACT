//botón; calcular cotización
document.getElementById("calcularBtn").addEventListener("click", function () {
  let tipoReactor = document.getElementById("tipoReactor").val;
  let cantidad = document.getElementById("cantidad").val;
  let pais = document.getElementById("pais").val;
  let precios = [ "PWR: 5000", "BWR: 5500", "PHWR: 4500", "LWGR: 6000" ];
  console.log(precios);
  let costoTotal = precios[tipoReactor] * cantidad;
  document.getElementById("resultado").val =
    "El costo total para " +
    cantidad +
    " reactor(es) tipo " +
    tipoReactor +
    " en " +
    pais +
    " es: $" +
    costoTotal +
    " millones";
});

setInterval(function () {
  let resultado = document.getElementById("resultado");
  resultado.style.backgroundColor =
    resultado.style.backgroundColor === "red" ? "lightgreen" : "red";
}, 250);

document
  .getElementById("calcularBtn")
  .addEventListener("mouseover", function () {
    javascript();
  });
document.getElementById("resultado").style.backgroundColor = "lightgreen";
function javascript() {
  let x = Math.floor(Math.random() * 300) - 300;
  let y = Math.floor(Math.random() * 300) - 300;
}
