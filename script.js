let rps = ["Rock", "Paper", "Scissors"];
let stop = false;
let wins = 0;
let loses = 0;
let ties = 0;

window.alert("Prepare to play Rock, Paper, Scissors!");

while (!stop) {
    let playerOne = prompt("Rock, Paper, or Scissors?");

    let playerTwo = rps[Math.floor(Math.random() * 3)];

    if (playerOne === playerTwo)
    {
        ties++;
        window.alert(`You selected ${playerOne} and the computer picked ${playerTwo}.\nTie!\nWins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    }
    else if((playerOne === rps[0] && playerTwo !== rps[2])
        || (playerOne === rps[1] && playerTwo !== rps[0])
        || (playerOne === rps[2] && playerTwo !== rps[1]))
    {
        loses++;
        window.alert(`You selected ${playerOne} and the computer picked ${playerTwo}.\nYou lost!\nWins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    }
    else if((playerOne === rps[0] && playerTwo !== rps[1])
        || (playerOne === rps[1] &&  playerTwo !== rps[2])
        || (playerOne === rps[2] &&  playerTwo !== rps[0]))
    {
        wins++
        window.alert(`You selected ${playerOne} and the computer picked ${playerTwo}.\nYou won!\nWins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    }

    if (!window.confirm("Do you want to play again?"))
    {
        stop = true;
    }
}