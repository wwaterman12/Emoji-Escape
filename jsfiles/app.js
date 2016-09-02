let playerBase;
let enemyBase;
let playerTroop;

const myGameArea = {
  canvas: document.createElement('canvas'),
  start() {
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function updateGameArea() {
  myGameArea.clear();
  enemyTroop.x +=1;
  enemyTroop.update;
  playerTroop.x +=1;
  playerTroop.y +=1;
  playerTroop.update;


}


window.onload = function startGame() {
  myGameArea.start();
  playerBase = new Base(100, 100, 'blue', 0, 400);
  enemyBase = new Base(100, 100, 'red', 700, 400);
  makeTroops();
  //playerTroop = new PlayerTroop(100, 400, 100);
  enemyTroop = new EnemyTroop(640, 400, 100);

}
