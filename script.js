document.addEventListener('DOMContentLoaded', () => {
  const startAnimationBtn = document.getElementById('startAnimationBtn');
  const flowerContainer = document.getElementById('flowerContainer');
  const petals = document.querySelectorAll('.petal');
  const miAudio = document.getElementById('miAudio'); // Obtener el elemento de audio

  // Función para mostrar u ocultar el contenido al hacer clic en el botón
  function toggleContent() {

    flowerContainer.classList.toggle('hidden');
    if (!flowerContainer.classList.contains('hidden')) {
      startAnimation();
    } else {
      // Detener la animación si se oculta el contenido
      petals.forEach(petal => {
        petal.classList.add('hidden');
        petal.style.animation = ''; // Eliminar la animación de los pétalos
      });
    }
    ocultarBoton(); 
  }

  // Escuchar el clic en el botón para mostrar u ocultar el contenido
  startAnimationBtn.addEventListener('click', () => {
    toggleContent(); 
    reproducirAudio(); 
  });

  // Función para animar los pétalos
  function animatePetals(index) {
    if (index < petals.length && !flowerContainer.classList.contains('hidden')) {
      petals[index].classList.remove('hidden'); 
      petals[index].style.animation = 'fadeInPetal 1s ease-in-out forwards'; // Aplicar animación de Fade In

      // Llamar recursivamente para el siguiente pétalo después de 1 segundo
      setTimeout(() => {
        animatePetals(index + 1);
      }, 1000); 
    }
  }

  function startAnimation() {
    animatePetals(0); // Comenzar la animación secuencial de los pétalos
  }

  function reproducirAudio() {
    if (miAudio.paused) { // Verificar si el audio está pausado
      miAudio.play(); 
    } else {
      miAudio.pause(); // Pausar el audio si ya está reproduciéndose
      miAudio.currentTime = 0; // Reiniciar la reproducción al principio del audio
    }
  }

  function ocultarBoton() {

    var boton = document.getElementById('startAnimationBtn');
    
    // Ocultar el botón cambiando su estilo
    boton.style.display = 'none';
  }
});
