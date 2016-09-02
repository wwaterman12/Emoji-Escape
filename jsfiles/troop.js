class PlayerTroop {
  constructor(x, y) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = () => {
      const img = document.createElement('img');
      img.setAttribute('src', './smiley-face.png');
      const ctx = myGameArea.context;
      ctx.drawImage(img, this.x, this.y)
    }
    this.newPos = () => {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  moveUp() {
    this.speedY -= 1;
  }

  moveDown() {
    this.speedY += 1;
  }

  moveLeft() {
    this.speedX -= 1;
  }

  moveRight() {
    this.speedX += 1;
  }

  crash(enemyTroop) {
    let myX = this.x;
    let myY = this.y;
    let EnemyToopX = enemyTroop.x;
    let enemyTroopY = enemyTroop.y;
    if (myX == EnemyToopX && myY == enemyTroopY) {
      return true;
    }
    return false;
  }
}
