let min = 1, max = 10, winningNum = Math.floor(Math.random() * (max - min + 1) + min), guessesLeft = 3;
console.log(`The right number is... ${winningNum}`);

const
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})
guessBtn.addEventListener('click', guess);

function guess(e) {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('Please enter a valid number', 'red');
        return;
    }

    if (winningNum === guess) {
        gameOver(true, `${winningNum} is correct, you win!`);
    } else {
        guessesLeft--;
        if (guessesLeft === 0) {
            gameOver(false, `Game over :( The correct number is... ${winningNum}`);
        } else {
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`You have ${guessesLeft} attempts left`, 'red');
        }
    }
};

function gameOver(won, msg) {
    let color = won ? 'green' : 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}