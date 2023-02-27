var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio('sounds/'+ randomChosenColor +'.mp3');
    audio.play();
}


// $(".btn").on("click", function(event) {
//     console.log(event.target.id);
// });

$(".btn").on("click", function(event) {
    var userChosenColor = event.target.id
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
});
