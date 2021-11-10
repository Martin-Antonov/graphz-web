import {Vertex} from './Vertex';
import {Edge, EdgeType} from './Edge';

export class Graph {
  vertices: Array<Vertex>;
  edges: Array<Edge>;

  constructor() {
    this.vertices = [];
    this.edges = [];
  }

  addVertex(v: Vertex = new Vertex()): void {
    this.vertices.push(v);
  }

  removeVertex(v: Vertex): void {
    this.vertices.splice(this.vertices.indexOf(v), 1);
    this.vertices.forEach((v2: Vertex) => {
      v2.removeNeighbour(v);
    });

    for (let i = 0; i < this.edges.length; i++) {
      const e = this.edges[i];
      if (e.vertices.includes(v)) {
        this.edges.splice(i, 1);
        i--;
      }
    }
  }

  addEdge(vertices: Array<Vertex>, weight = 0, type = EdgeType.UNDIRECTED): void {
    if (vertices.length !== 2) {
      return;
    }
    this.edges.push(new Edge(vertices, weight, type));
    vertices[0].addNeighbour(vertices[1]);

    if (type === EdgeType.UNDIRECTED) {
      vertices[1].addNeighbour(vertices[0]);
    }
  }

  removeEdge(e: Edge): void {
    this.edges.splice(this.edges.indexOf(e), 1);
    e.vertices[0].removeNeighbour(e.vertices[1]);
    if (e.type === EdgeType.UNDIRECTED) {
      e.vertices[1].removeNeighbour(e.vertices[0]);
    }
  }
}
