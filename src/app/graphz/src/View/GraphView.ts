import {Graph} from '../Model/Graph';
import {VertexView} from './VertexView';
import {EdgeView} from './EdgeView';
import {Vertex} from '../Model/Vertex';
import {Edge} from '../Model/Edge';

export class GraphView {
  scene: Phaser.Scene;
  graph: Graph;
  vertices: Array<VertexView>;
  edges: Array<EdgeView>;

  constructor(scene: Phaser.Scene, graph: Graph) {
    this.scene = scene;
    this.graph = graph;
    this.vertices = [];
    this.edges = [];

    this.init();
  }

  private init(): void {
    this.graph.vertices.forEach((v: Vertex) => {
      this.vertices.push(new VertexView(this.scene, v));
    });

    this.graph.edges.forEach((e: Edge) => {
      const vertices = e.vertices.map((v: Vertex) => {
        return this.findVertexView(v);
      });
      this.edges.push(new EdgeView(this.scene, vertices, e));
    });

    this.edges.forEach((eView: EdgeView) => {
      eView.redraw();
    });
  }

  findVertexView(v: Vertex): VertexView {
    return this.vertices.find((vView: VertexView) => {
      return vView.vertex === v;
    });
  }

  findEdgeView(e: Edge): EdgeView {
    return this.edges.find((eView: EdgeView) => {
      return eView.edge === e;
    });

  }
}
