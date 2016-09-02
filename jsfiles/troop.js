class Troop {
  constructor(x, y, imageTag) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = () => {
      const img = document.createElement('img');
      img.setAttribute('src', imageTag);
      const ctx = myGameArea.draw;
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
    let playerX = this.x;
    let playerY = this.y;
    let enemyX = enemyTroop.x;
    let enemyY = enemyTroop.y;
    let dx = playerX - enemyX;
    let dy = playerY - enemyY;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 53) {
      return true
    };
    return false;
  };
}





