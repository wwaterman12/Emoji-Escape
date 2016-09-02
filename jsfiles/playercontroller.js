let controller = document.createElement('div');
let troopSpawner = document.createElement('button');
troopSpawner.innerHTML = 'Spawn Troop';
controller.setAttribute('id', 'controller');
controller.appendChild(troopSpawner);
document.body.appendChild(controller);


function makeTroops() {
  troopSpawner.addEventListener('click', () => {
  playerTroop = new PlayerTroop(100, 400, 100);
})
};
