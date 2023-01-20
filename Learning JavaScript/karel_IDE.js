// intro to Karel IDE
function main(){
   move();
   move();
   move();
   move();
   turnLeft();
   move();
   move();
   move();
   move();
}


// diagonal beeper
function main(){
   putBeeper();
   moveAndDrop();
   moveAndDrop();
   moveAndDrop();
   moveAndDrop();
}

function moveAndDrop(){
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}
