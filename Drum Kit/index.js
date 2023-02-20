var drumButton = document.querySelectorAll(".drum");

function handleClick() {
    alert("I got clicked!")
}

for (var i = 0; i < drumButton.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}



// // document.querySelectorAll("button")
// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);
