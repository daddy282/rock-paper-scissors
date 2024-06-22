document.addEventListener('DOMContentLoaded', () => {
    let userMoves = [];

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

    function playGame(userMove) {
        const computerMove = getComputerMove(userMoves);
        userMoves.push(userMove);

        document.getElementById('user-move').textContent = `Your Move: ${userMove}`;
        document.getElementById('computer-move').textContent = `Computer Move: ${computerMove}`;

        const result = determineWinner(userMove, computerMove);
        document.getElementById('result').textContent = `Result: ${result === 'draw' ? "It's a draw!" : result === 'user' ? "You win!" : "Computer wins!"}`;
    }

    function getComputerMove(userMoves) {
        if (!userMoves.length) return randomChoice();

        if (userMoves.length >= 2 && userMoves[userMoves.length - 1] === userMoves[userMoves.length - 2]) {
            if (userMoves[userMoves.length - 1] === 'rock') return 'paper';
            if (userMoves[userMoves.length - 1] === 'paper') return 'scissors';
            return 'rock';
        }

        if (userMoves.length >= 1) {
            if (userMoves[userMoves.length - 1] === 'rock') return 'paper';
            if (userMoves[userMoves.length - 1] === 'paper') return 'scissors';
            return 'rock';
        }

        return randomChoice();
    }

    function randomChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(user, computer) {
        if (user === computer) return 'draw';
        if ((user === 'rock' && computer === 'scissors') || (user === 'paper' && computer === 'rock') || (user === 'scissors' && computer === 'paper')) {
            return 'user';
        }
        return 'computer';
    }
});
