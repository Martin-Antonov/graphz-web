import {GraphController} from './Controller/GraphController';

export class MainScene extends Phaser.Scene {
  constructor() {
    super('main');
  }

  preload(): void {
    this.load.image('s', 'assets/Scissors.png');
  }

  create(): void {
    const graph = new GraphController(this);
  }
}
