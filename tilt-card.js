// tiltie-cardsie.juhsee soooooooooooooooooooooooo eeeppppppppyyyyyyy
document.querySelectorAll('.tilt-card').forEach(card => {
    let lastX = 0, lastY = 0;
  
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      if (lastX !== x || lastY !== y) {
        lastX = x;
        lastY = y;
  
        const xRotation = 50 * ((x - rect.width / 2) / rect.width);
        const yRotation = -50 * ((y - rect.height / 2) / rect.height);
        const rotation = `perspective(1000px) rotateX(${yRotation}deg) rotateY(${xRotation}deg)`;
        card.style.transform = rotation;
      }
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
  });