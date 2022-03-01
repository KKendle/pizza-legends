class DirectionInput {
  constructor() {
    this.heldDirections = [];
    this.map = {
      'ArrowUp': 'up',
      'KeyW': 'up',

      'ArrowDown': 'down',
      'KeyS': 'down',

      'ArrowLeft': 'left',
      'KeyA': 'left',

      'ArrowRight': 'right',
      'KeyD': 'right'
    };
  }

  get direction() {
    return this.heldDirections[0];
  }

  init() {
    document.addEventListener('keydown', (event) => {
      const dir = this.map[event.code];

      if (dir && this.heldDirections.indexOf(dir) === -1) {
        this.heldDirections.unshift(dir);
      }
    });
    document.addEventListener('keyup', (event) => {
      const dir = this.map[event.code];
      const index = this.heldDirections.indexOf(dir);

      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
    });
  }
}
