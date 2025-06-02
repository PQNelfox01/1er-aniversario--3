document.addEventListener("DOMContentLoaded", () => {
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
});

window.addEventListener('load', () => {
  const galeria = document.querySelector('#otros-momentos .galeria-línea');
  if (!galeria) return;

  let scrollAmount = 0;
  const scrollStep = 1; // píxeles a mover cada frame
  const maxScroll = galeria.scrollWidth - galeria.clientWidth;

  function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= maxScroll) {
      scrollAmount = 0; // reset para loop
    }
    galeria.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});

galeria.addEventListener('mouseenter', () => {
  cancelAnimationFrame(autoScrollId);
});

galeria.addEventListener('mouseleave', () => {
  autoScrollId = requestAnimationFrame(autoScroll);
});

let autoScrollId;

function autoScroll() {
  scrollAmount += scrollStep;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0;
  }
  galeria.scrollLeft = scrollAmount;
  autoScrollId = requestAnimationFrame(autoScroll);
}
