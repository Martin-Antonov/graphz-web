import {VertexView} from './VertexView';
import {Edge, EdgeType} from '../Model/Edge';
import {EDGE_WIDTH, VERTEX_COLOR} from '../Misc/Constants';

export class EdgeView {
  scene: Phaser.Scene;
  vertices: Array<VertexView>;
  line: Phaser.GameObjects.Line;
  ellipse: Phaser.GameObjects.Ellipse;
  arrow: Phaser.GameObjects.Triangle;
  edge: Edge;
  selected: boolean;

  constructor(scene: Phaser.Scene, vertices: Array<VertexView>, edge: Edge) {
    this.scene = scene;
    this.vertices = vertices;
    this.selected = false;
    this.edge = edge;
    this.line = this.scene.add.line(0, 0, 0, 0, 0, 0, VERTEX_COLOR, 1).setAlpha(0);
    this.line.setLineWidth(EDGE_WIDTH);
    this.ellipse = this.scene.add.ellipse(0, 0, 20, 30, VERTEX_COLOR, 0).setAlpha(0);
    this.arrow = this.scene.add.triangle();
    this.redraw();
  }

  redraw(): void {
    if (this.edge.type === EdgeType.UNDIRECTED) {
      this.arrow.setAlpha(0);
      this.ellipse.setAlpha(0);
      this.line.setTo(this.vertices[0].x, this.vertices[0].y, this.vertices[1].x, this.vertices[1].y);
      this.line.setAlpha(1);
    }
  }
}
