window.onload = function startGame() {
  myGameArea.start();
}

let myGameArea = {
  canvas: document.createElement('canvas'),
  start() {
    this.canvas.width = 800;
    this.canvas.height = 400;
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
  },
};
