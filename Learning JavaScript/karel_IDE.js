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


// chess-pattern beeper
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main(){
   beeperOdd();

   maneuverLeft();

   beeperEven();

   maneuverRight();

   beeperOdd();

   maneuverLeft();

   beeperEven();

   maneuverRight();

   beeperOdd();
}

function beeperOdd(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function beeperEven(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

function maneuverLeft(){
   turnLeft();
   move();
   turnLeft();
}

function maneuverRight(){
   turnRight();
   move();
   turnRight();
}
