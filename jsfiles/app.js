let playerBase;
let playerTroop;
let enemyTroops = [];
let individualTroop;

const myGameArea = {
  canvas: document.createElement('canvas'),
  start() {
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.draw = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.counter = 1;
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keydown', (e) => {
      this.key = e.keyCode;
    });
    window.addEventListener('keyup', (e) => {
      this.key = false;
    });
  },
  clear() {
    this.draw.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop() {
    clearInterval(this.interval);
  }
  // win() {
  //   clearInterval(this.interval);

  // }
};

function updateGameArea() {
  for (let i=0; i<enemyTroops.length; i++) {
    if (playerTroop.crash(enemyTroops[i])) {
    myGameArea.stop();
    console.log('game has stopped');
    alert('You touched an emoji! Game over')
    };
  };
  if (playerTroop.crash(enemyTroop)) {
    myGameArea.stop();
    console.log('game has stopped');
  }
  myGameArea.clear();
  playerTroop.speedX = 0;
  playerTroop.speedY = 0;
  if (myGameArea.key && myGameArea.key == 65) {
    playerTroop.moveLeft();
  };
  if (myGameArea.key && myGameArea.key == 68) {
    playerTroop.moveRight();
  };
  if (myGameArea.key && myGameArea.key == 87) {
    playerTroop.moveUp();
  };
  if (myGameArea.key && myGameArea.key == 83) {
    playerTroop.moveDown();
  };
  playerTroop.newPos();
  playerTroop.update();

  myGameArea.counter+=1;
  if (myGameArea.counter == 101) {
    myGameArea.counter = 1;
  };
  console.log(myGameArea.counter);
  if(myGameArea.counter%100 == 0) {
    enemyTroops.push(new Troop(Math.floor(Math.random() * myGameArea.canvas.width), Math.floor(Math.random() * myGameArea.canvas.height), './smiley-face.png'));
  };
  for(let i=0; i<enemyTroops.length; i++) {
    enemyTroops[i].update();
  };
  enemyTroop.update();
  playerBase.update();

};


window.onload = function startGame() {
  myGameArea.start();
  playerBase = new Base(100, 100, 'red', 700, 400);
  playerTroop = new Troop(100, 400, './smiley-face.png');
  enemyTroop = new Troop(300,400, './smiley-face.png');
  individualTroop = new Troop(200,350, './smiley-face.png');

}
