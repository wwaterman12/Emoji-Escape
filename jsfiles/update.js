// window.onload = function getNumber() {
//   playerNumber = prompt('enter your phone number');
// }

// var twilio = require('twilio');

// // Find your account sid and auth token in your Twilio account Console.
// var client = twilio('ACe6bc8f01219dc97381a7dacaf7c18b07', 'f726b55a721dd3bc45d484733fabf4d3');

// // Send the text message.
// client.sendMessage({
//   to: playerNumber,
//   from: '+16319047332',
//   body: 'Hello from Twilio!'
// });

function updateGameArea() {
  //check if Game over or Winner
  for (let i=0; i<enemyTroops.length; i++) {
    if (playerTroop.crash(enemyTroops[i])) {
    myGameArea.stop();
    };
  };
  if (playerTroop.crash(playerBase)) {
    myGameArea.win();
  };


  //clear the game area
  myGameArea.clear();


  //update player movement
  playerTroop.speedX = 0;
  playerTroop.speedY = 0;
  if (myGameArea.key && myGameArea.key == 65) {
    playerTroop.moveLeft();
    playerTroop.moveLeft();
  };
  if (myGameArea.key && myGameArea.key == 68) {
    playerTroop.moveRight();
    playerTroop.moveRight();
  };
  if (myGameArea.key && myGameArea.key == 87) {
    playerTroop.moveUp();
    playerTroop.moveUp();
  };
  if (myGameArea.key && myGameArea.key == 83) {
    playerTroop.moveDown();
    playerTroop.moveDown();
  };
  playerTroop.newPos();
  playerTroop.outOfBoundsCheck();
  playerTroop.update();

  //spawn enemy troops
  myGameArea.counter+=1;
  if (myGameArea.counter == 101) {
    myGameArea.counter = 1;
  };
  if(myGameArea.counter%difficulty == 0) {
    enemyTroops.push(new Troop(myGameArea.canvas.width, Math.floor(Math.random() * myGameArea.canvas.height), emoji[Math.floor(Math.random() * (emoji.length - 1))], 50, 50));
  };
  for(let i=0; i<enemyTroops.length; i++) {
    if (myGameArea.key) {
      enemyTroops[i].moveLeft();
      enemyTroops[i].newPos();
    }
    enemyTroops[i].update();
  };

  //render home base after every update
  playerBase.update();
};
