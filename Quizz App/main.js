const questions = {
    html: [
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
            answer: [
                { option: "Center", correct: false },
                { option: "Left", correct: true },
                { option: "Right", correct: false },
                { option: "Justify", correct: false }
            ]
        },
        {
            question: "What is the main function of HTML in web development?",
            answer: [
                { option: "To add interactivity to a webpage", correct: false },
                { option: "To style the content of a webpage", correct: false },
                { option: "To define the structure of a webpage", correct: true },
                { option: "To store data on a webpage", correct: false }
            ]
        },
        {
            question: "What does the term responsive design mean in HTML?",
            answer: [
                { option: "The ability of a webpage to display animations", correct: false },
                { option: "The ability of a webpage to load quickly", correct: false },
                { option: "The ability of a webpage to rank high in search engines", correct: false },
                { option: "The ability of a webpage to adapt to different screen sizes", correct: true }
            ]
        }
    ],
    css: [
        // Add CSS questions here
        {
            question: "What does CSS stand for?",
            answer: [
                { option: "Computer Style Sheets", correct: false },
                { option: "Creative Style Sheets", correct: false },
                { option: "Cascading Style Sheets", correct: true },
                { option: "Colorful Style Sheets", correct: false }
            ]
        },
        {
            question: "What is the purpose of CSS in web development?",
            answer: [
                { option: "To add interactivity to a webpage", correct: false },
                { option: "To define the structure of a webpage", correct: false },
                { option: "To style the content of a webpage", correct: true },
                { option: "To store data on a webpage", correct: false }
            ]
        },
        {
            question: "What is the default value of the position property in CSS?",
            answer: [
                { option: "static", correct: true },
                { option: "fixed", correct: false },
                { option: "absolute", correct: false },
                { option: "relative", correct: false }
            ]
        },
        {
            question: "What is the purpose of the z-index property in CSS?",
            answer: [
                { option: "To add a shadow to an element", correct: false },
                { option: "To define the width of an element", correct: false },
                { option: "To specify the stack order of an element", correct: true },
                { option: "To add a border to an element", correct: false }
            ]
        },
        {
            question: "What does the term CSS specificity mean?",
            answer: [
                { option: "The ability of a webpage to display animations", correct: false },
                { option: "The ability of a webpage to load quickly", correct: false },
                { option: "The ability of a webpage to rank high in search engines", correct: false },
                { option: "The ability of a webpage to adapt to different screen sizes", correct: false }
            ]
        }
    ],
    javascript: [

        {
            question: "What is JavaScript?",
            answer: [
                { option: "A programming language that enables web developers to design interactive websites", correct: true },
                { option: "A tool for creating animations on a webpage", correct: false },
                { option: "A software for editing images", correct: false },
                { option: "A database management system", correct: false }
            ]
        },
        {
            question: "What is the purpose of the document object in JavaScript?",
            answer: [
                { option: "To define the structure of a webpage", correct: false },
                { option: "To store data on a webpage", correct: false },
                { option: "To add interactivity to a webpage", correct: false },
                { option: "To represent the webpage itself", correct: true }
            ]
        },
        {
            question: "What is the main function of JavaScript in web development?",
            answer: [
                { option: "To define the structure of a webpage", correct: false },
                { option: "To add interactivity to a webpage", correct: true },
                { option: "To style the content of a webpage", correct: false },
                { option: "To store data on a webpage", correct: false }
            ]
        },
        {
            question: "What is the purpose of the console.log() method in JavaScript?",
            answer: [
                { option: "To display a message in the console", correct: true },
                { option: "To add a border to an element", correct: false },
                { option: "To define the width of an element", correct: false },
                { option: "To specify the stack order of an element", correct: false }
            ]
        },
        {
            question: "What does the term DOM stand for in JavaScript?",
            answer: [
                { option: "Document Object Model", correct: true },
                { option: "Data Object Model", correct: false },
                { option: "Design Object Model", correct: false },
                { option: "Display Object Model", correct: false }
            ]
        }
    ],
    c: [
        {
            question: "What is the full form of C?",
            answer: [
                { option: "Computer", correct: false },
                { option: "C", correct: false },
                { option: "C++", correct: false },
                { option: "C Programming Language", correct: true }
            ]
        },
        {
            question: "Who is known as the father of C language?",
            answer: [
                { option: "Dennis Ritchie", correct: true },
                { option: "Bjarne Stroustrup", correct: false },
                { option: "James Gosling", correct: false },
                { option: "Guido van Rossum", correct: false }
            ]
        },
        {
            question: "What is the purpose of the main() function in C?",
            answer: [
                { option: "To define the structure of a program", correct: false },
                { option: "To store data in a program", correct: false },
                { option: "To add interactivity to a program", correct: false },
                { option: "To represent the starting point of a program", correct: true }
            ]
        },
        {
            question: "What is the purpose of the printf() function in C?",
            answer: [
                { option: "To display a message on the screen", correct: true },
                { option: "To add a border to an element", correct: false },
                { option: "To define the width of an element", correct: false },
                { option: "To specify the stack order of an element", correct: false }
            ]
        },
        {
            question: "What does the term IDE stand for in C programming?",
            answer: [
                { option: "Integrated Development Environment", correct: true },
                { option: "Interactive Development Environment", correct: false },
                { option: "Intelligent Development Environment", correct: false },
                { option: "Internet Development Environment", correct: false }
            ]
        }
    ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;

const QuestionDisplay = document.querySelector(".question");
const answerBtn = document.querySelector(".answer");
const nextBtn = document.querySelector("#next");
const quizBox = document.querySelector(".quizbox");
const mainContainer = document.querySelector(".main-container");

function selectCategory(category) {
    currentCategory = category;
    mainContainer.style.display = 'none';
    quizBox.style.display = 'block';
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentCategory][currentQuestionIndex];
    let QuestionNum = currentQuestionIndex + 1;
    QuestionDisplay.innerHTML = QuestionNum + ".  " + currentQuestion.question;

    currentQuestion.answer.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.option;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    nextBtn.innerHTML = "Next";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    QuestionDisplay.innerHTML = `You scored ${score} out of ${questions[currentCategory].length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";

    const msg = document.createElement("h1");
    msg.innerHTML = "Congratulations!";
    msg.style.color = "#00FF9C";
    msg.style.textAlign = "center";
    msg.style.marginTop = "10px";
    answerBtn.appendChild(msg);
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions[currentCategory].length) {
        handleNextBtn();
    } else {
        mainContainer.style.display = 'block';
        quizBox.style.display = 'none';
    }
});

showQuestion();