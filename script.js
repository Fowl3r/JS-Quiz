const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')

let shuffledQuestions, currentQuestionindex // This will set both of these to undefined, will be defined later
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionindex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide') //This will add Start Button to hidden once pressed
    shuffledQuestions = questions.sort(() => Math.random() - .5)    // This provides a random array as number is below or above 0 using MAth.Random and the -.5 makes it above/below 50% of te time
    currentQuestionindex - 0
    questionContainerElement.classList.remove('hide') // This will show it once start button is pressed
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion=(shuffledQuestions[currentQuestionindex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.textbutton.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    nextButton.classList.add("hide")
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.remove(answerButtonsElement.firstChild)
    }

}


function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionindex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.removw("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            {text: "4", correct: true},
            {text: "22", correct: false}
        ]
    }
]