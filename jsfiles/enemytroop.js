class EnemyTroop {
  constructor(x, y, health) {
    this.x = x;
    this.y = y;
    this.health = health;
    this.update = () => {
      const img = document.getElementById('smileyface');
      const ctx = myGameArea.context;
      ctx.drawImage(img, this.x, this.y)
      };
    }

}
