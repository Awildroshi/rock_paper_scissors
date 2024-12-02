const scoreUpdate = document.getElementById('update-score');
const results = document.querySelector('.result');
const computerChoice = document.getElementById('comp-choice');
const playerChoiceButtons = document.querySelectorAll('#player-choice button');
const playAgainButton = document.querySelector('.play-again');

let score = 0;

// Choices for computer
const choices = ['rock', 'paper', 'scissors'];

// Play Game
function playGame(playerSelection) {
    const computerSelection = computerPick();
    const result = determineWinner(playerSelection, computerSelection);

    displayResult(result, computerSelection);
    updateScore(result);
}

// Computer Pick Logic
function computerPick() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine Winner
function determineWinner(player, computer) {
    if (player === computer) return 'draw';

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}

// Display Result
function displayResult(result, computerSelection) {
    // Show computer's choice
    computerChoice.textContent = `THE HOUSE PICKED: ${computerSelection.toUpperCase()}`;

    // Show result
    results.querySelector('h1').textContent = result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'IT\'S A DRAW';

    results.style.display = 'block'; // Ensure result section is visible
}

// Update Score
function updateScore(result) {
    if (result === 'win') {
        score++;
    } else if (result === 'lose') {
        score--;
    }

    scoreUpdate.textContent = score;
}

// Restart Game
playAgainButton.addEventListener('click', () => {
    results.style.display = 'none';
    computerChoice.textContent = 'THE HOUSE PICKED';
});

// Add Event Listeners to Player Choices
playerChoiceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerSelection = e.currentTarget.querySelector('img').alt.toLowerCase();
        playGame(playerSelection);
    });
});
