let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrect = 0;

//fetch('questions.json').then(response => response.json()).then(data => globalThis.questions = data)

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleQuestions() {
    const questionEntries = Object.entries(questions);
    shuffledQuestions = shuffle(questionEntries);
}

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionObj = shuffledQuestions[currentQuestionIndex][1];

    const questionElem = document.createElement('div');
    questionElem.classList.add('question');
    questionElem.textContent = questionObj.question;
    quizContainer.appendChild(questionElem);

    for (const [key, answer] of Object.entries(questionObj.answers)) {
        const answerElem = document.createElement('button');
        answerElem.classList.add('answer');
        answerElem.textContent = answer;
        answerElem.onclick = () => checkAnswer(key, questionObj.correct, answerElem);
        quizContainer.appendChild(answerElem);
    }
}

function checkAnswer(selected, correct, element) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.disabled = true);

    if (selected === correct) {
        element.classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
    } else {
        element.classList.add('incorrect');
        incorrect++;
        document.getElementById('incorrect').textContent = incorrect;
        const correctElem = [...answers].find(answer => answer.textContent === shuffledQuestions[currentQuestionIndex][1].answers[correct]);
        correctElem.classList.add('correct');
    }
}

document.getElementById('next-btn').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        alert('Quiz completed! Your score is ' + score);
        window.location.reload();
    }
};

shuffleQuestions();
loadQuestion();
