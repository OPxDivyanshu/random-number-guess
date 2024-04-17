let random = generateRandomNumber(); // Initial random number

const inputBT = document.getElementById("input");
const buttonBT = document.getElementById("button");
const resultBT = document.getElementById("result");
console.log(random);

buttonBT.addEventListener('click', function() {
    const guessedNumber = parseInt(inputBT.value); // Parse input value to integer
    if (guessedNumber === random) {
        resultBT.innerHTML = "Correct! You guessed the number correctly.";
    } else {
        resultBT.innerHTML = "Wrong! The correct answer was " + random + ". Try again!";
    }
    
   
    inputBT.value = "";
    
   
    random = generateRandomNumber();
    console.log(random);
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}
