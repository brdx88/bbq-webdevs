var drumButton = document.querySelectorAll(".drum");

function handleClick() {
    alert("I got clicked!")
}

function playSound() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}

for (var i = 0; i < drumButton.length; i++) {
    // document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}
