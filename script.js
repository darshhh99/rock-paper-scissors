const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementById("resultText");
const userChoiceImage = document.getElementById("userChoiceImage");
const computerChoiceImage = document.getElementById("computerChoiceImage");

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        userChoiceImage.src = `${userChoice}.png`; 
        computerChoiceImage.src = `${computerChoice}.png`;
        determineWinner(userChoice, computerChoice);
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultText.textContent = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}
