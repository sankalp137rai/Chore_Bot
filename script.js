const doorImage1 = document.querySelector('#door1');
const doorImage2 = document.querySelector('#door2');
const doorImage3 = document.querySelector('#door3');
const startButton = document.querySelector('#start');
const currentStreak = document.querySelector('#score-number');
const bestStreak = document.querySelector('#high-score-number');

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'; 
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beechDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let scoreNumber = 0;
let highScoreNumber = 0;
let currentlyPlaying = true;
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
  if(door.src === botDoorPath) return true;
  else return false;
}

const isClicked = (door) => {
    if(door.src === closedDoorPath) return false;
    else return true;
}

const gameOver = (status) => {
  console.log(status);
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    scoreNumber++;
    if(scoreNumber > highScoreNumber) highScoreNumber++;
    currentStreak.innerHTML = scoreNumber;
    bestStreak.innerHTML = highScoreNumber
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
    scoreNumber = 0;
    currentStreak.innerHTML = scoreNumber;
  }
  currentlyPlaying = false;
}  
  
const playDoor = (door) =>{
    numClosedDoors--;
    if(numClosedDoors === 0) gameOver('win');
    else if(isBot(door)) gameOver();
  }

 doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
  // console.log("numClosedDoors = "+numClosedDoors);
};
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () =>{
  if(!currentlyPlaying){
    startRound();
  }
}

const startRound = () =>{
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const randomChoreDoorGenerator = () =>{
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  console.log(choreDoor);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beechDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 1){
     openDoor2 = botDoorPath;
     openDoor3 = beechDoorPath;
     openDoor1 = spaceDoorPath;
  }
  else if(choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor2 = beechDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

startRound();
