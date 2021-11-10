import {Vertex} from '../Model/Vertex';
import {SELECTED_ALPHA, SELECTED_COLOR, SELECTED_RADIUS, VERTEX_COLOR, VERTEX_RADIUS} from '../Misc/Constants';

export class VertexView extends Phaser.GameObjects.Container {
  selected: boolean;
  vertex: Vertex;
  circle: Phaser.GameObjects.Arc;
  selection: Phaser.GameObjects.Arc;

  constructor(scene: Phaser.Scene, v: Vertex, x: number = 0, y: number = 0) {
    super(scene, x, y);
    this.selected = false;
    this.vertex = v;
    this.circle = this.scene.add.circle(0, 0, VERTEX_RADIUS, VERTEX_COLOR);
    this.selection = this.scene.add.circle(0, 0, SELECTED_RADIUS, SELECTED_COLOR, SELECTED_ALPHA).setAlpha(0);
    this.setSize(VERTEX_RADIUS * 2, VERTEX_RADIUS * 2);
    this.setInteractive();
    this.scene.input.setDraggable(this);
    this.add([this.circle, this.selection]);
    this.setPosition(Math.random() * 500, Math.random() * 500);
    this.scene.add.existing(this);
  }
}
