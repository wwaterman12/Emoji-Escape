class Base {
  constructor(width, height, color, x, y, health) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.health = health;
    const ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

  };
}
