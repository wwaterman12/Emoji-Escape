class Troop {
  //constructs all objects in game
  constructor(x, y, imageTag, width, height) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.update = () => {
      const img = document.createElement('img');
      img.setAttribute('src', imageTag);
      const ctx = myGameArea.draw;
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };
    this.newPos = () => {
      this.x += this.speedX;
      this.y += this.speedY;
    };
  };

  moveUp() {
    this.speedY -= 1;
  };

  moveDown() {
    this.speedY += 1;
  };

  moveLeft() {
    this.speedX -= 1;
  };

  moveRight() {
    this.speedX += 1;
  };

  crash(enemyTroop) {
    let playerX = this.x;
    let playerY = this.y;
    let enemyX = enemyTroop.x;
    let enemyY = enemyTroop.y;
    let dx = playerX - enemyX;
    let dy = playerY - enemyY;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.width/2 + enemyTroop.width/2 - 5) {
      return true;
    };
    return false;
  };

  outOfBoundsCheck() {
    if (this.x > myGameArea.canvas.width + 1) {
      this.x = 1;
    };
    if (this.x < 0) {
      this.x = myGameArea.canvas.width;
    };
    if (this.y < 0) {
      this.y = myGameArea.canvas.height - 1;
    }
    if (this.y > myGameArea.canvas.height) {
      this.y = 0;
    }
  }
}





