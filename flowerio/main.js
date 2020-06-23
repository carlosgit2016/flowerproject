console.log("Welcome to my game");

const gameStatus = 0; //Game Running

function run() {

    const main = document.getElementById("main");
    console.log("Canvas main: " + main);
    
    while (true) {

        if(gameStatus === 2){ // Game finished
            break;
        } else if (gameStatus === 1){ // Paused game
            console.log("Game paused");
        } else if  (gameStatus === 0) { //Running Game
            console.log("Game running");
        }
        
    }
}