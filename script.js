const doorImage1 = document.querySelector('#door1');
const doorImage2 = document.querySelector('#door2');
const doorImage3 = document.querySelector('#door3');

const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beechDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

 doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
};
doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
};
doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
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
randomChoreDoorGenerator();
