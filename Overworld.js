class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector('.game-canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    }
    image.src = '/images/maps/DemoLower.png'

    const x = 5;
    const y = 6;
    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0, // left cut
        0, // top cut
        32, // width cut
        32, // height cut
        x * 16 - 8, // x position on map
        y * 16 - 18, // y position on map
        32, // draw cut width
        32 // draw cut height
      );
    }
    shadow.src = '/images/characters/shadow.png'

    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0, // left cut
        0, // top cut
        32, // width cut
        32, // height cut
        x * 16 - 8, // x position on map
        y * 16 - 18, // y position on map
        32, // draw cut width
        32 // draw cut height
      );
    }
    hero.src = '/images/characters/people/hero.png'
  }
}
