let difficulty;
let playerBase;
let playerTroop;
let enemyTroops = [];
let playerNumber;
let emoji = ['./alien.png', './devil.png', './angel-face.png', './ghost.png', './poop.png', './retro.png', './smiley-face.png', './war-face.png', './flag.png']

const myGameArea = {
  //create the game board
  canvas: document.createElement('canvas'),
  start() {
    this.canvas.width = 1300;
    this.canvas.height = 550;
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

  style() {
    setInterval(() =>{
     const r = Math.floor(Math.random()*255);
     const g = Math.floor(Math.random()*255);
     const b = Math.floor(Math.random()*255);
     this.canvas.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${Math.random()})`;
   }, 2000);
  },

  clear() {
    this.draw.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  stop() {
    clearInterval(this.interval);
    myGameArea.clear();
    let lose = window.confirm('Oh no! You touched an emoji :( /n play again?');
    if (lose) {
      playerTroop.x = 15;
      playerTroop.y = 15;
      myGameArea.start();
    }
  },

  win() {
    clearInterval(this.interval);
    myGameArea.clear();
    let win = window.confirm('you win! Play again?');
    if (win) {
      playerTroop.x = 15;
      playerTroop.y = 15;
      myGameArea.start();
    }
  }
};

window.onload = function startGame() {
  difficulty = prompt('choose difficulty: easy, normal, hard, impossible');
    if (difficulty == 'easy') {
      difficulty = 100;
    } else if (difficulty == 'normal') {
      difficulty = 50;
    } else if (difficulty == 'hard') {
      difficulty = 25;
    } else {
      difficulty = 10;
    }
  myGameArea.start();
  myGameArea.style();
  playerBase = new Troop(1250, 500, './flag.png', 50, 50);
  playerTroop = new Troop(15, 15, './smiley-face.png', 50, 50);

}
