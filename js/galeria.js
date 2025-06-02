document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach((img, i) => {
        img.addEventListener("click", () => {
            alert(`¡Este es uno de nuestros recuerdos #${i + 1}! ❤️`)
        });
    });
});