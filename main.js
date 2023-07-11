// Declare variables
const guessMsg = document.getElementById("guessMsg");
const guessContainer = document.getElementById('guessContainer');
const playAgain = document.getElementById('playAgain');

// Set number of guesses variable
let numOfGuesses = 1;

// Generate an age between 1 and 10 at random
let maxAge = 10;
let age = Math.floor(Math.random() * maxAge + 1);


function check() {
    // Get the users guess value
    const guess = document.getElementById('guessTheAge').value;

    // If the users guess is equal to 0 or over the maximum age alert an error
    if (guess == 0 || guess > maxAge) {
        alert(`Please enter a value between one and ${maxAge}`);
    } 
    // 
    else {
        // If users guess is equal to age end game
        if (guess == age) {
            guessMsg.innerText = `Well done! 
                You guessed right! The answer was ${age}! You got it right in ${numOfGuesses} guesses!`;
                guessContainer.style.display="none";
                playAgain.style.display="inline";
        }
        // If users guess is greater than the generated age
        else if (guess > age) {
            // Add to number of guesses
            numOfGuesses++;

            // Display msg to user
            guessMsg.innerText = `${guess} is to high, try a smaller number`;
        } 
        // If users guess is smaller than generated age
        else {
            // Add to number of guesses
            numOfGuesses++;

            // Display msg to user
            guessMsg.innerText = `${guess} is to small, try a larger number`;
        }
    }
};

