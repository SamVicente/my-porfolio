const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Índice de la tarjeta actual

function updateCarousel() {
    // Calcula el desplazamiento basado en el índice actual
    const cardWidth = cards[0].offsetWidth + 32; // Ancho de la tarjeta + margen
    const offset = -currentIndex * cardWidth; // Desplazamiento hacia la izquierda
    carousel.style.transform = `translateX(${offset}px)`; // Aplica el desplazamiento
}

// Manejador de eventos para el botón "next"
nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Manejador de eventos para el botón "prev"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Inicializa el carrusel al cargar la página
updateCarousel();
