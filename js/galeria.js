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
