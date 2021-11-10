import {Graph} from '../Model/Graph';
import {GraphView} from '../View/GraphView';
import {VertexView} from '../View/VertexView';
import {EdgeView} from '../View/EdgeView';

export class GraphController {
  scene: Phaser.Scene;
  graph: Graph;
  graphView: GraphView;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.createInitialGraph();
  }

  createInitialGraph(): void {
    this.graph = new Graph();
    for (let i = 0; i < 50; i++) {
      this.graph.addVertex();
    }


    for (let i = 0; i < this.graph.vertices.length; i++) {
      for (let j = i + 1; j < this.graph.vertices.length; j++) {
        this.graph.addEdge([this.graph.vertices[i], this.graph.vertices[j]]);
      }
    }

    this.graphView = new GraphView(this.scene, this.graph);
    this.attachHandlersToVertices(this.graphView.vertices);
  }

  private attachHandlersToVertices(vertices: Array<VertexView>): void {

    this.scene.input.on('drag',
      (pointer: Phaser.Input.Pointer,
       gameObject: Phaser.GameObjects.GameObject,
       dragX: number,
       dragY: number) => {
        if (gameObject instanceof VertexView) {
          gameObject.setPosition(dragX, dragY);
          const edges = this.graphView.edges.filter((eView: EdgeView) => {
            return eView.vertices.includes(gameObject);
          });
          edges.forEach((eView: EdgeView) => {
            eView.redraw();
          });
        }
      }, this);
  }
}
