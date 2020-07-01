console.log("Welcome to my game");

let gameStatus = 1; //Game Running

// Main Game
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

async function play() {
    gameStatus = 0;
    const gameContent = await testFRequest();
    const game_content = document.getElementById("game_content");
    game_content.textContent = JSON.stringify(gameContent);
}

async function testFRequest() {
    let request = new Request("http://172.22.0.2:3000");

    const res = await fetch(request);
    const json = await res.json();
    return json;
}