const questions = [
    {
        question: "¿Cuál es el país más grande del mundo por superficie?",
        answers: ["Canadá", "Rusia", "China", "Estados Unidos"],
        correct: 1
    },
    {
        question: "¿En qué continente se encuentra Egipto?",
        answers: ["Asia", "Europa", "África", "Oceanía"],
        correct: 2
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    },
    {
        question: "¿Cuál es el idioma más hablado en el mundo?",
        answers: ["Inglés", "Mandarín", "Español", "Hindú"],
        correct: 1
    },
    {
        question: "¿En qué año llegó el hombre a la Luna?",
        answers: ["1965", "1969", "1972", "1959"],
        correct: 1
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        answers: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Julio Cortázar"],
        correct: 1
    },
    {
        question: "¿Cuál es el océano más grande?",
        answers: ["Océano Índico", "Océano Atlántico", "Océano Pacífico", "Océano Ártico"],
        correct: 2
    },
    {
        question: "¿Cuál es el elemento químico con el símbolo O?",
        answers: ["Oro", "Osmio", "Oxígeno", "Óxido"],
        correct: 2
    },
    {
        question: "¿Cuál es el animal terrestre más rápido?",
        answers: ["León", "Tigre", "Guepardo", "Lobo"],
        correct: 2
    },
    {
        question: "¿Qué planeta es conocido como el planeta rojo?",
        answers: ["Júpiter", "Marte", "Saturno", "Venus"],
        correct: 1
    },
    {
        question: "¿Cuál es la capital de Japón?",
        answers: ["Osaka", "Kioto", "Tokio", "Nagasaki"],
        correct: 2
    },
    {
        question: "¿Quién descubrió América en 1492?",
        answers: ["Fernando de Magallanes", "Cristóbal Colón", "Americo Vespucio", "Hernán Cortés"],
        correct: 1
    },
    {
        question: "¿Cuál es el metal más utilizado en la industria?",
        answers: ["Oro", "Hierro", "Aluminio", "Cobre"],
        correct: 1
    },
    {
        question: "¿Qué gas forma la mayor parte de la atmósfera terrestre?",
        answers: ["Oxígeno", "Nitrógeno", "Hidrógeno", "Dióxido de carbono"],
        correct: 1
    },
    {
        question: "¿Qué artista es conocido como 'El rey del pop'?",
        answers: ["Elvis Presley", "Freddie Mercury", "Michael Jackson", "Prince"],
        correct: 2
    },
    {
        question: "¿Cuál es el país con mayor población del mundo?",
        answers: ["India", "Estados Unidos", "Brasil", "China"],
        correct: 3
    },
    {
        question: "¿Cuál es la moneda oficial de Japón?",
        answers: ["Yuan", "Won", "Yen", "Dólar"],
        correct: 2
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correct: 1
    },
    {
        question: "¿Qué año estalló la Primera Guerra Mundial?",
        answers: ["1914", "1939", "1918", "1945"],
        correct: 0
    },
    {
        question: "¿Qué inventó Alexander Graham Bell?",
        answers: ["Teléfono", "Telégrafo", "Avión", "Radio"],
        correct: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
	updateScore();
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;

    // Mezclar las respuestas
    const answers = [...question.answers];
    const correctAnswerIndex = question.correct;
    shuffleArray(answers);

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.textContent = answer;
        answerElement.classList.add('answer');
        answerElement.addEventListener('click', () => handleAnswerClick(answerElement, answer, answers.indexOf(answer) === answers.indexOf(question.answers[correctAnswerIndex])));
        answersContainer.appendChild(answerElement);
    });

    document.getElementById('next-button').classList.add('hidden');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function handleAnswerClick(answerElement, selectedAnswer, isCorrect) {
    // Mostrar el color según si la respuesta es correcta o incorrecta
    document.querySelectorAll('.answer').forEach(answer => {
        answer.removeEventListener('click', handleAnswerClick);
        answer.style.pointerEvents = 'none'; // Desactiva los eventos de clic
    });
 if (isCorrect) {
        answerElement.style.backgroundColor = 'lightgreen';
        answerElement.style.color = 'black';
        score++;
        updateScore();
    } else {
        answerElement.style.backgroundColor = 'lightcoral';
        answerElement.style.color = 'black';
       
    }

    // Desactivar eventos después de responder y mostrar el botón de siguiente
    document.getElementById('next-button').classList.remove('hidden');
}
function updateScore() {
    document.getElementById('score').textContent = score;
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
         showResults();
 
    }
});
  
    
	   // Ocultar el contenedor de preguntas y respuestas
 
function showResults() {
    const resultMessage = document.getElementById('result-message');
    
    // Crea una función para determinar si se debe aplicar el resaltado
    const highlightClass = (minScore, maxScore) => {
        return (score >= minScore && (score < maxScore || maxScore === undefined)) ? 'highlight' : '';
    };

    resultMessage.innerHTML = `
        <h2>¡Has terminado la trivia!</h2>
        <p>Has obtenido ${score} puntos.</p>
        <div class="result-categories">
            <div class="${highlightClass(1, 5)}"> 1 punto:No sabes tanto, fue suerte</div>
            <div class="${highlightClass(5, 10)}">5 puntos: Algo sabes</div>
            <div class="${highlightClass(10, 15)}">10 puntos: Promedio</div>
            <div class="${highlightClass(15, 20)}">15 puntos: Sabio</div>
            <div class="${highlightClass(20)}">20 puntos: El mas sabio</div>
        </div>
    `;

    // Ocultar el contenedor de preguntas y respuestas
    document.getElementById('trivia').classList.add('hidden');
    // Mostrar el mensaje de resultados
    document.getElementById('result-container').classList.remove('hidden');
}
//tenes que dejar de comentar tanto sam
//att: sam