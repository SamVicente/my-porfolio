
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg' ];
    const cardsArray = images.concat(images);

let flippedCards = [];
let matchedCards = [];
let timeLeft = 300; // 10 minutos en segundos
const timerElement = document.getElementById('timer');
let canClick = true; // Variable para controlar si se pueden hacer clics
let timerInterval; // Variable para almacenar el identificador del temporizador
const pauseButton = document.getElementById('pauseButton');
const pauseIcon = document.getElementById('pauseIcon');
let isPaused = false;
let score = 0;



    function shuffle(array) {
      let currentIndex = array.length, tempValue, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
      }

      return array;
    }

    function createBoard() {
      const board = document.getElementById('gameBoardd');
      const shuffledCards = shuffle(cardsArray);

      for (let i = 0; i < shuffledCards.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.cardIndex = i;

         card.addEventListener('click', function() {
      if (canClick && !card.classList.contains('flipped')) {
        flipCard(this);
      }
	  	updateScore();
    });

        board.appendChild(card);

        // Agregar salto de línea cada 4 cartas para formar 4 filas
        if ((i + 1) % 8 === 0) {
          board.appendChild(document.createElement('br'));
        }
      }
    }

    function flipCard(card) {
		 if (isPaused) return; // No permitir que se volteen cartas mientras está en pausa
		
      const cardIndex = card.dataset.cardIndex;
      const cardImage = cardsArray[cardIndex];

      card.style.backgroundImage = `url(${cardImage})`;
      card.style.backgroundSize = 'cover';
      card.classList.add('flipped');

      flippedCards.push({ card, cardIndex });

      if (flippedCards.length === 2) {
         canClick = false; // Deshabilitar clics mientras se verifica la coincidencia
    setTimeout(checkMatch, 1000);
      }
    }

    function checkMatch() {
      const card1 = flippedCards[0];
      const card2 = flippedCards[1];

      if (card1.cardIndex === card2.cardIndex) {
        // Si se hace clic dos veces en la misma carta
        alert('¡Elige dos cartas diferentes!');
        resetFlippedCards();
		 canClick = true; // Rehabilitar clics
        return;
      }

     if (cardsArray[card1.cardIndex] === cardsArray[card2.cardIndex]) {
    // Si las cartas coinciden
	  score++;
    matchedCards.push(card1.card, card2.card);
    if (matchedCards.length === cardsArray.length) {
      alert('¡Felicidades, has ganado!');
      clearInterval(timerInterval); // Detener el temporizador al ganar
    }
  } else {
    // Si las cartas no coinciden
    card1.card.style.backgroundImage = '';
    card2.card.style.backgroundImage = '';
    card1.card.classList.remove('flipped');
    card2.card.classList.remove('flipped');
  }

  resetFlippedCards();
  canClick = true; // Rehabilitar clics después de verificar la coincidencia
}
function updateScore() {
    document.getElementById('score').textContent = score;
}

    function resetFlippedCards() {
      flippedCards = [];
    }
	
function startTimer() {
  timerInterval = setInterval(function() {
    if (!isPaused) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `Tiempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (timeLeft === 0) {
        clearInterval(timerInterval);
        alert('¡El tiempo se ha acabado! Inténtalo de nuevo.');

        // Bloquear las cartas
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.removeEventListener('click', flipCard));
      }

      timeLeft--;
    }
  }, 1000);
}
pauseButton.addEventListener('click', function() {
   if (isPaused) {
    isPaused = false;
    pauseIcon.src = 'pausa.png'; // Cambia a la imagen de pausa
    pauseIcon.alt = 'Pause';
  } else {
    isPaused = true;
    pauseIcon.src = 'play.png'; // Cambia a la imagen de reanudar
    pauseIcon.alt = 'Play';
  }
});
// Inicializar el tablero y el temporizador
createBoard();
startTimer();