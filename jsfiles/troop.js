class Troop {
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
    let playerTroopLeft = this.x;
    let playerTroopTop = this.y;
    let playerTroopRight = this.x + 54;
    let playerTroopBottom = this.y + 54;
    let EnemyTroopLeft = enemyTroop.x;
    let enemyTroopTop = enemyTroop.y;
    let enemyTroopRight = enemyTroop.x + 54;
    let enemyTroopBottom = enemyTroop.y + 54;
    if ( (playerTroopRight > EnemyTroopLeft) && (playerTroopLeft < enemyTroopRight) &&
      (playerTroopBottom > enemyTroopTop) && (playerTroopTop < enemyTroopBottom) ) {
          return true
        };
    return false;
  }
}
