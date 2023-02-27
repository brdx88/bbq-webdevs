var gamePattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}

// $("#" + randomChosenColor);

function selectedColor(color) {
    $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio(color+'.mp3');
    audio.play();
}
