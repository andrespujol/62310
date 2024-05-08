const div = document.getElementById("root");

const crearBotonDinamico = (texto, clase, id, disabled) => {
  const btn = document.createElement("button");

  btn.innerHTML = texto;
  btn.className = clase;
  btn.id = id;
  btn.disabled = disabled;

  btn.addEventListener("click", handleClick);
  div.appendChild(btn);
};

const handleClick = () => {
  alert("clickeaste");
};
crearBotonDinamico(
  "Soy un botón dinámico",
  "btnDinamico",
  "btnDinamico",
  false
);
