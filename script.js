const colores = ["green", "blue", "red"];

function colorAleatorio() {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}

const elementosH5 = document.querySelectorAll("h5");

elementosH5.forEach(h5 => {
  h5.addEventListener("click", () => {
    h5.style.color = colorAleatorio();
  });
});
