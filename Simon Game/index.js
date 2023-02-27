var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];

var started = false;
var level = 0;

$(document).on("keypress", function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function(event) {
    var userChosenColor = event.target.id
    // var userChosenColour = $(this).attr("id");       ALTERNATIVE

    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern)                  CHECK THE ANSWER

    playSound(userChosenColor);
    animatePress(userChosenColor);
});


function nextSequence() {
    level++
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio('sounds/'+ name +'.mp3');
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")

    setTimeout(function() {$("#" + currentColor).removeClass("pressed")}, 100)                                                 // delay in miliseconds
}
