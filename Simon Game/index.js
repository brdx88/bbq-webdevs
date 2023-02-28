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

    checkAnswer(userClickedPattern.length-1);
});


function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
};

function playSound(name) {
    var audio = new Audio('sounds/'+ name +'.mp3');
    audio.play();
};

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")

    setTimeout(function() {$("#" + currentColor).removeClass("pressed")}, 100)                                                 // delay in miliseconds
};

function checkAnswer(currentLevel) {

    // selain ngecek warna terakhirnya apa,
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");

      // ngecek juga jumlah pattern-nya sama gak?
      if (userClickedPattern.length === gamePattern.length) {
          setTimeout(function () {
              nextSequence();
          }, 1000);
      }
    } else {
        console.log('wrong');
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound('wrong');

        $("body").addClass("game-over");
        setTimeout(function() {$("body").removeClass("game-over")}, 200);

        startOver();
    }

    // EXPLAINATION
    
    // gamePattern = ['red', 'red', 'yellow']
    // userClickedPattern = ['yellow']
    // ini salah. karena meskipun warna terakhirnya benar, tapi jumlah array-nya beda.
    //
    // gamePattern = ['red', 'red', 'yellow']
    // userClickedPattern = ['red', 'red', 'blue']
    // ini salah. karena meskipun jumlah array-nya benar, tapi warna terakhirnya salah.
    //
    // gamePattern = ['red', 'red', 'yellow']
    // userClickedPattern = ['red', 'blue']
    // ini salah. karena ketika click di 'blue' (di userClickedPattern[1]), dicek juga gamePattern[1].
    // jadi memang conditional-nya ngecek 1-1 per index saat user click warnanya.
    //
    //
    // userClickedPattern.length-1 = 2-1
    // userClickedPattern.length-1 = 1
    //
    // userClickedPattern[userClickedPattern.length-1]
    // userClickedPattern[1]
    //
    // gamePattern[userClickedPattern.length-1]
    // gamePattern[1]
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
};
