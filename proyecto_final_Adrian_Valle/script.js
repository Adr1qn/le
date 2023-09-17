// Obtén el botón y el elemento de contenido
const botonMostrarOcultar = document.getElementById("mostrarOcultar");
const contenido = document.getElementById("contenido");

// Agrega un evento de clic al botón
botonMostrarOcultar.addEventListener("click", function() {
    // Si el contenido está visible, ocúltalo; si está oculto, muéstralo
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        // Aplicar estilos CSS al mostrar
        contenido.style.backgroundColor = "#e0e0e0";
        contenido.style.border = "1px solid #ddd";
    } else {
        contenido.style.display = "none";
    }
});