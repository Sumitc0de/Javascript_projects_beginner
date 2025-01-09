const InputBtn = document.querySelectorAll(".btns"),
    CompOutput = document.getElementById("computer-display"),
    PlayerOutput = document.getElementById("player-display"),
    CompScoreOutput = document.getElementById("computer-score"),
    PlayerScoreOutput = document.getElementById("player-score");

let ComputerScore = 0;
let PlayerScore = 0;
let round; 


CompScoreOutput.innerHTML = ComputerScore;
PlayerScoreOutput.innerHTML = PlayerScore;

setTimeout(() =>{
    round = prompt("Enter no. of round you want to Play");
},100)


// Function to display player turn
function PlayerTurn(btn) {
    if (btn.children[0].id == "rock") {
        let rock = document.createElement("span");
        rock.innerHTML = "&#x1F44A;";
        rock.classList.add("elem-display");
        PlayerOutput.appendChild(rock);
        setTimeout(() => rock.classList.add("show"), 10);
        return "rock";
    } else if (btn.children[0].id == "paper") {
        let paper = document.createElement("span");
        paper.innerHTML = "&#x1f590;";
        paper.classList.add("elem-display");
        PlayerOutput.appendChild(paper);
        setTimeout(() => paper.classList.add("show"), 10);
        return "paper";
    } else {
        let scissor = document.createElement("span");
        scissor.innerHTML = "&#x270c;";
        scissor.classList.add("elem-display");
        PlayerOutput.appendChild(scissor);
        setTimeout(() => scissor.classList.add("show"), 10);
        return "scissor";
    }
}

// Function to display computer turn
function ComputerTurn(playerChoice) {
    let choices = ["rock", "paper", "scissor"];
    let RandomNum;

    do {
        RandomNum = Math.floor(Math.random() * 3);
    } while (choices[RandomNum] === playerChoice);

    CompOutput.innerHTML = ""; // Clear the CompOutput before appending new element

    if (choices[RandomNum] === "rock") {
        let rock = document.createElement("span");
        rock.innerHTML = "&#x1F44A;";
        rock.classList.add("elem-display");
        CompOutput.appendChild(rock);
        setTimeout(() => rock.classList.add("show"), 10);
        return "rock";
    } else if (choices[RandomNum] === "paper") {
        let paper = document.createElement("span");
        paper.innerHTML = "&#x1f590;";
        paper.classList.add("elem-display");
        CompOutput.appendChild(paper);
        setTimeout(() => paper.classList.add("show"), 10);
        return "paper";
    } else {
        let scissor = document.createElement("span");
        scissor.innerHTML = "&#x270c;";
        scissor.classList.add("elem-display");
        CompOutput.appendChild(scissor);
        setTimeout(() => scissor.classList.add("show"), 10);
        return "scissor";
    }
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// Function to update scores
function UpdateScore(winner) {
    if (winner === "player") {
        PlayerScore++;
        PlayerScoreOutput.innerHTML = PlayerScore;
     
    } else if (winner === "computer") {
        ComputerScore++;
        CompScoreOutput.innerHTML = ComputerScore;
    }
}

InputBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (round > 0) {
            console.log(btn.children[0].id);

            PlayerOutput.innerHTML = "";
            let playerChoice = PlayerTurn(btn);

            let computerChoice = ComputerTurn(playerChoice);

            let winner = determineWinner(playerChoice, computerChoice);
            UpdateScore(winner);

            round--;

            if (round === 0) {
                setTimeout(() =>{
                    alert("Congratulations! You Won.");

                }, 150)
            }
            
        }
    });
});