const questions = [
    {
        question: "What do you understand by the term HTML?",
        answer: [
            { option: "Hyper Text Markup Language", correct: true },
            { option: "Hyperlinks and Text Markup Language", correct: false },
            { option: "Home Tool Markup Language", correct: false },
            { option: "Hyper Tool Markup Language", correct: false }
        ]
       
    },
    {
        question: "What is the purpose of the body tags in an HTML document?",
        answer: [
            { option: "To structure the entire content of the webpage", correct: true },
            { option: "To add styles and animations to the webpage", correct: false },
            { option: "To define the metadata and link external stylesheets", correct: false },
            { option: "To store JavaScript code", correct: false }
        ]
    },
    {
        question: "What is the default alignment of text in an HTML P tag?",
        answer : [
            { option: "Center", correct: false },
            { option: "Left", correct: true },
            { option: "Right", correct: false },
            { option: "Justify", correct: false }
        ]
    },
    {
        question: "What is the main function of HTML in web development?",
        answer : [
            { option: "To add interactivity to a webpage", correct: false},
            { option: "To style the content of a webpage", correct: false },
            {   option: "To define the structure of a webpage", correct: true},
            { option: "To store data on a webpage", correct: false }
        ]


    },
    {
        question: "What does the term responsive design mean in HTML?",
        answer: [
            { option: "The ability of a webpage to display animations", correct: false},
            { option: "The ability of a webpage to load quickly", correct: false },
            { option: "The ability of a webpage to rank high in search engines", correct: false },
            {  option: "The ability of a webpage to adapt to different screen sizes", correct: true }
        ]
    }
    

]


// HTML Selection 
const QuestionDisplay = document.querySelector(".question");
const answerBtn = document.querySelector(".answer");
const nextBtn = document.querySelector("#next");


let currentQuestionIndex = 0;   // Current index will be zero
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showquestion();
}

function showquestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];                                                 // It will take as index value of question and give output
    let QuestionNum = currentQuestionIndex + 1;                                                           // It increase Question number by adding question index number by 1
    QuestionDisplay.innerHTML = QuestionNum + ".  " + currentQuestion.question;                             // It displaying the question by using innerHTMl  method

    currentQuestion.answer.forEach(ans => {                                         // ForEach loop for answer bbtn to take action on each btn by adding button through appemding on asnwer div
        const button = document.createElement("button");
        button.innerHTML = ans.option;   // give answer text written in array of object - option
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;     // checking true or false on an array 
        }
        button.addEventListener('click', SelectAns);
    })
}

function resetState() {
    nextBtn.style.display = "none"
    nextBtn.innerHTML = "Next"
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function SelectAns(e) {
    const SelectBtn = e.target;
    let isCorrect = SelectBtn.dataset.correct === "true";
    if (isCorrect) {
        SelectBtn.classList.add("correct");
        score++;
    } else {
        SelectBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block"
}

function showscore() {
    resetState();
    QuestionDisplay.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"
}


function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showquestion();
    } else {
        showscore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

showquestion();