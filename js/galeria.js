document.addEventListener("DOMContentLoaded", () => {
  // Animación de movimiento con el cursor en PC
  const fotos = document.querySelectorAll(".foto");

  fotos.forEach(foto => {
    foto.addEventListener("mousemove", (e) => {
      const { offsetX, offsetY, target } = e;
      const { clientWidth, clientHeight } = target;

      const moveX = (offsetX / clientWidth - 0.5) * 20;
      const moveY = (offsetY / clientHeight - 0.5) * 20;

      target.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg) scale(1.05)`;
    });

    foto.addEventListener("mouseleave", (e) => {
      e.target.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    });
  });

  // Scroll automático en la sección de otros momentos
  const galeria = document.querySelector('#otros-momentos .galeria-línea');
  if (!galeria) return;

  let scrollAmount = 0;
  const scrollStep = 1; // velocidad de desplazamiento
  let autoScrollId;

  function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= galeria.scrollWidth - galeria.clientWidth) {
      scrollAmount = 0;
    }
    galeria.scrollLeft = scrollAmount;
    autoScrollId = requestAnimationFrame(autoScroll);
  }

  autoScroll();

  // Detener el scroll cuando el cursor entra y reanudar al salir
  galeria.addEventListener('mouseenter', () => {
    cancelAnimationFrame(autoScrollId);
  });

  galeria.addEventListener('mouseleave', () => {
    autoScroll();
  });
});