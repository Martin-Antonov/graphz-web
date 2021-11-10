export class Vertex {
  neighbours: Array<Vertex>;
  degree: number;
  inDegree: number;
  outDegree: number;
  eccentricity: number;
  label: string;

  constructor() {
    this.neighbours = [];
    this.degree = 0;
    this.inDegree = 0;
    this.outDegree = 0;
  }

  get isIsolated(): boolean {
    return this.degree === 0 && this.outDegree === 0;
  }

  get isLeaf(): boolean {
    return this.degree === 1 || this.outDegree === 1;
  }

  get isSource(): boolean {
    return this.outDegree === 0;
  }

  get isSink(): boolean {
    return this.inDegree === 0;
  }

  get isSimplicial(): boolean {
    for (let i = 0; i < this.neighbours.length; i++) {
      const n1 = this.neighbours[i];
      for (let j = i + 1; j < this.neighbours.length; j++) {
        const n2 = this.neighbours[j];
        if (!n1.neighbours.includes(n2) || !n2.neighbours.includes(n1)) {
          return false;
        }
      }
    }
    return true;
  }

  isUniversal(totalVerticesCount: number): boolean {
    return this.neighbours.length === totalVerticesCount - 1;
  }

  addNeighbour(v: Vertex): void {
    this.neighbours.push(v);
    this.degree++;
    this.outDegree++;
  }

  removeNeighbour(v: Vertex): void {
    const index = this.neighbours.indexOf(v);
    if (index !== -1) {
      this.neighbours.splice(index, 1);
      this.degree--;
      this.outDegree--;
    }
  }
}
