// Generate an age between 1 and 16 at random
let maxAge = 16;
let age = Math.floor(Math.random() * maxAge + 1);

// if number entered is 0 or greater than 16 display alerts and show your guess and answer
function check() {
    let y = document.getElementById('guessTheAge').value;
    let a;
    if (y > 16) {
        alert('Please use a number between 1 and 16')
    } else if (y == 0) {
        alert('Please enter a value')
    } else if (y == age) {
        document.getElementById('displayAnswer').innerText = `Correct! Well done! 
        Your guess was ${y} and the answer was ${age}!!`;
        document.getElementById('playAgain').style.display="inline";
    } else if (y != age) {
        document.getElementById('displayAnswer').innerText = `Oops, you were wrong!
        Your guess was ${y} and the answer was ${age}!!`;
        document.getElementById('playAgain').style.display="inline";
    } else {
        document.getElementById('displayAnswer').innerText = `Your guess was ${y} and the 
        answer was ${age}!!`;
        document.getElementById('playAgain').style.display="inline";
    }
}
