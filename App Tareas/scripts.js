const tareaInput = document.getElementById("tarea");
const agregarBtn = document.getElementById("agregar");
const contenedor = document.getElementById("contenedor");

agregarBtn.addEventListener("click", function() {
  const tarea = tareaInput.value.trim();
  if (tarea) {
    
    const card = document.createElement("div");
    card.classList.add("feature-card", "p-3", "my-3");

    const tar = document.createElement("h4");
    tar.textContent = tarea;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn1", "px-3", "py-2");

    btnEliminar.addEventListener("click", () => {
        card.remove();
    });    
    card.appendChild(tar);
    card.appendChild(btnEliminar);
    contenedor.appendChild(card);
    tareaInput.value = "";
  } else {
    mensaje.textContent = `Por favor, escribe tu tarea.`;
  }
});






