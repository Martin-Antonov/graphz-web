import {Vertex} from './Vertex';

export enum EdgeType {
  UNDIRECTED = 1,
  DIRECTED
}

export class Edge {
  weight: number;
  vertices: Array<Vertex>;
  type: EdgeType;

  constructor(vertices: Array<Vertex>, weight = 0, type = EdgeType.UNDIRECTED) {
    this.vertices = vertices;
    this.type = type;
    this.weight = weight;
  }
}
