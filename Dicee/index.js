// if (document.location.reload()) {
//
//     var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//     var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
//     document.querySelector(".img1").setAttribute("src", `images\\dice${randomNumber1}.png`);
//     document.querySelector(".img2").setAttribute("src", `images\\dice${randomNumber2}.png`);
//
//     if (randomNumber1 == randomNumber2) {
//         document.querySelector("h1").innerHTML = "Draw!";
//     } else if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
//     } else {
//         document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
//     }
//
//     break;
// }

//////////////////////////////////////

// function rollDice {
//
//     var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//     var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
//     document.querySelector(".img1").setAttribute("src", `images\\dice${randomNumber1}.png`);
//     document.querySelector(".img2").setAttribute("src", `images\\dice${randomNumber2}.png`);
//
//     if (randomNumber1 == randomNumber2) {
//         document.querySelector("h1").innerHTML = "Draw!"
//     } else if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
//     } else {
//         document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
//     }
// }
//
// var randomNumber1 = 6;
// var randomNumber2 = 6;
//
// window.onload(rollDice);
//////////////////////////////////////

// const player1Dice = document.getElementById('player1-dice');
// const player2Dice = document.getElementById('player2-dice');
//
// function rollDice() {
//   const player1Value = Math.floor(Math.random() * 6) + 1;
//   const player2Value = Math.floor(Math.random() * 6) + 1;
//
//   player1Dice.textContent = player1Value;
//   player2Dice.textContent = player2Value;
// }
//
// // Set initial values to 6
// player1Dice.textContent = 6;
// player2Dice.textContent = 6;
//
// // Call rollDice() function when the page is loaded or refreshed
// window.onload = rollDice;

//////////////////////////////////



//
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images\\dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images\\dice${randomNumber2}.png`);

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
