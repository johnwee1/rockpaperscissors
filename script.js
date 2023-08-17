console.log("test");

const enumValues = { "rock": 1, "paper": 2, "scissors": 3 };
const reverseValues = Object.entries(enumValues).reduce((acc, [key, value]) => { acc[value] = key; return acc; }, {});
/*
enumValues is an OBJECT. need to convert to primitive array of key value pairs.
.reduce takes in a callback function (in this case anonymous) with arguments in this order (accumulator, currentValue)
the initial value of the accumulator is {}. it tells the reduce function to create an object. then populate the object by adding values of acc
*/

function getComputerChoice() {
    return Math.floor((Math.random() * 3) + 1);
}


function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    console.log(`You play ${playerChoice} and the computer plays ${reverseValues[computerChoice]}`);
    if (enumValues[playerChoice] == computerChoice) {
        console.log("The game draws.");
    }
    else if (playerChoice == "rock" && reverseValues[computerChoice] == "scissors") {
        console.log("You win.");
    }
    else if (playerChoice == "scissors" && reverseValues[computerChoice] == "paper") {
        console.log("You win.");
    }
    else if (playerChoice == "paper" && reverseValues[computerChoice] == "rock") {
        console.log("You win.");
    }
    else console.log("You lose.");
}

/// Play 5 games
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("Select what you want to play"));
    }
}