//botón; calcular cotización
document.getElementById("calcularBtn").addEventListener("click", function () {
  let tipoReactor = getElementByName("tipoReactorPower").val;
  let cantidad = getElementById("cantidad").val;
  let pais = getElementById("pais").val;
  let precios = { PWR: 5000, BWR: 5500, PHWR: 4500, LWGR: 6000 };
  let costoTotal = precios[tipoReactor] * cantidad;
  getElementById("resultado").val =
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
  let resultado = getElementById("resultado");
  resultado.style.backgroundColor =
    resultado.style.backgroundColor === "red" ? "lightgreen" : "red";
}, 250);

getElementById("calcularBtn").addEventListener("mouseover", function () {
  javascript();
});
getElementById("resultado").style.backgroundColor = "lightgreen";
function javascript() {
  let x = Math.floor(Math.random() * 300) - 300;
  let y = Math.floor(Math.random() * 300) - 300;
  getElementById("calcularBtn").style.transform = `translate(${x}px, ${y}px)`;
}
