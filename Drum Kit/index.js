var drumButton = document.querySelectorAll(".drum");

function handleClick() {
    alert("I got clicked!")
}

for (var i = 0; i < drumButton.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
