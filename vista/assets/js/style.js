// Función para abrir el modal de visualización
function abrirModalVisualizar() {
  $("#visualizarModal").modal("show");
}

// Función para cambiar el estado del botón
function cambiarEstado(estado) {
  // Cambiar la clase y el texto del botón principal
  var toggleButton = document.getElementById("toggleButton");
  toggleButton.classList.remove("btn-success", "btn-warning", "btn-danger");
  toggleButton.classList.add(getColorClass(estado));
  toggleButton.innerText = estado;
}

// Función para alternar entre los estados (Activo, Pendiente, Inhabilitado)
function toggleEstado() {
  var currentState = document.getElementById("toggleButton").innerText;

  switch (currentState) {
    case "Activo":
      cambiarEstado("Pendiente");
      break;
    case "Pendiente":
      cambiarEstado("Inhabilitado");
      break;
    case "Inhabilitado":
      cambiarEstado("Activo");
      break;
    default:
      break;
  }
}

// Función para obtener la clase de color correspondiente al estado
function getColorClass(estado) {
  switch (estado) {
    case "Activo":
      return "btn-success";
    case "Pendiente":
      return "btn-warning";
    case "Inhabilitado":
      return "btn-danger";
    default:
      return "btn-secondary"; // Puedes establecer un color predeterminado si es necesario
  }
}
