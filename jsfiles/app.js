let playerBase;
let playerTroop;

const myGameArea = {
  canvas: document.createElement('canvas'),
  start() {
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keydown', (e) => {
      this.key = e.keyCode;
    })
    window.addEventListener('keyup', (e) => {
      this.key = false;
    })
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop() {
    clearInterval(this.interval);
  }
};

function updateGameArea() {
  myGameArea.clear();
  playerTroop.speedX = 0;
  playerTroop.speedY = 0;
  if (myGameArea.key && myGameArea.key == 65 || myGameArea.key == 37) {
    playerTroop.moveLeft();
  }
  if (myGameArea.key && myGameArea.key == 68 || myGameArea.key == 39) {
    playerTroop.moveRight();
  }
  if (myGameArea.key && myGameArea.key == 87 || myGameArea.key == 38) {
    playerTroop.moveUp();
  }
  if (myGameArea.key && myGameArea.key == 83 || myGameArea.key == 40) {
    playerTroop.moveDown();
  }
  playerTroop.newPos();
  playerTroop.update();
  playerBase.update();

}


window.onload = function startGame() {
  myGameArea.start();
  playerBase = new Base(100, 100, 'red', 700, 400);
  playerTroop = new PlayerTroop(100, 400);

}
