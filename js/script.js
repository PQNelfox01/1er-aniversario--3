document.addEventListener("DOMContentLoaded", () => {
    // Ajustar volumen música
    const musica = document.getElementById('musicaFondo');
    if (musica) {
        musica.volumen = 0.3; // volumen suave
    }

    // Control de botón "Nuestros recuerdos"
    const btnRecuerdos = document.getElementById("btn-recuerdos");
    const cartaLeida = localStorage.getItem("cartaLeida");

    if (cartaLeida === "true") {
        btnRecuerdos.classList.remove("deshabilitado");
        btnRecuerdos.style.pointerEvents = "auto";
        btnRecuerdos.style.opacity = "1";
    } else {
        btnRecuerdos.title = "Primero debes leer la carta 💌";
        btnRecuerdos.style.pointerEvents = "none";
        btnRecuerdos.style.opacity = "0.5";
    }
});