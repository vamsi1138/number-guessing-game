// 1. Start game
// 2. Generate a random number
// 3. Ask user for input
// 4. Compare guess with number
// 5. Give hint (high/low)
// 6. Repeat until correct
// 7. Show success message

const prompt = require("prompt-sync")();



const genarateRandomNumber = () => {
    console.log("Number is Generating...")
    return Math.floor(Math.random() * 101) + 1;
};

const userInput = () => {
    const guessNum = prompt("Guess the Number : ");
    const guessingNumber = parseFloat(guessNum);
    if(isNaN(guessingNumber)){
        console.log("❌ Invalid input. Please enter a number.");
        return userInput();
    }
    return guessingNumber;
};

const game = () => {
    let randomNumber = genarateRandomNumber();

    console.log("Sucessfully Generated.");
    console.log("Start the Guessing Number");
    while (true) {
        const guessedNumber = userInput();
        if (guessedNumber == randomNumber){
            console.log("You have Successfully guessed Number!.")
            break;
        } else{ 
            if (guessedNumber > randomNumber) {
                console.log("Wrong Number it is Too High");
            } else if (guessedNumber < randomNumber){
                console.log("Wrong Number it is Too Low");
            }
            console.log("try again")
        }
    }
};



const startgame = () => {
    console.log("Welcome to the game of Guessing the Number bet 1 to 100! \n");

    while(true){
        game();

        const playAgain = prompt("Do you want to play again (y/n)? ").toLowerCase().trim();
        if (playAgain !== 'y') {
            console.log("👋 Thanks for playing!");
            break;
        }
    }
};

startgame();
















