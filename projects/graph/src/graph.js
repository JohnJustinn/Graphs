// Hex Color Function 

function randomColor(hex = '') {
  if (hex.length === 6) return '#' + hex;

  const hexSection = ((Math.random() * 240) | 0).toString(16);
  hex += (hexSection.length === 1) ? '0' + hexSection : hexSection;
  return randomColor(hex);
}

/**
 * Edge
 */
export class Edge {
  // !!! IMPLEMENT ME
  constructor(destination, weight = 1) {
    this.destination = destination;
    this.weight = weight;
  }
}

/**
 * Vertex
 */
export class Vertex {
  // !!! IMPLEMENT ME
  constructor(value = 'vertex', pos = {x: 50, y: 50}) {
    this.value = value;
    this.edges = [];
    this.pos = pos;
  }
  // constructor() {
  //   this.edges = [];
  //   this.fillColor = 'white';
  //   this.parent = null;
  //   this.visited = false;
  // }
}

/**
 * Graph
 */
export class Graph {
  constructor() {
    this.vertexes = [];
  }

  debugCreateTestData(){
    let testVertex1 = new Vertex('t1', {x: 100, y: 100});
    let testVertex2 = new Vertex('t2', {x: 200, y: 200});
    let testVertex3 = new Vertex('t3', {x: 300, y: 100});

    let edge1 = new Edge(testVertex2);
    let edge2 = new Edge(testVertex3);
    let edge3 = new Edge(testVertex1);

    testVertex1.edges.push(edge1);
    testVertex2.edges.push(edge2);
    testVertex3.edges.push(edge3);

    this.vertexes.push(testVertex1, testVertex2, testVertex3);
  }

  /**
   * Create a random graph
   */
  randomize(width, height, pxBox, probability=0.6) {
    // Helper function to set up two-way edges
    function connectVerts(v0, v1) {
      v0.edges.push(new Edge(v1));
      v1.edges.push(new Edge(v0));
    }

    let count = 0;

    // Build a grid of verts
    let grid = [];
    for (let y = 0; y < height; y++) {
      let row = [];
      for (let x = 0; x < width; x++) {
        let v = new Vertex();
        //v.value = 'v' + x + ',' + y;
        v.value = 'v' + count++;
        row.push(v);
      }
      grid.push(row);
    }

    // Go through the grid randomly hooking up edges
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Connect down
        if (y < height - 1) {
          if (Math.random() < probability) {
            connectVerts(grid[y][x], grid[y+1][x]);
          }
        }

        // Connect right
        if (x < width - 1) {
          if (Math.random() < probability) {
            connectVerts(grid[y][x], grid[y][x+1]);
          }
        }
      }
    }

    // Last pass, set the x and y coordinates for drawing
    const boxBuffer = 0.8;
    const boxInner = pxBox * boxBuffer;
    const boxInnerOffset = (pxBox - boxInner) / 2;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        grid[y][x].pos = {
          'x': (x * pxBox + boxInnerOffset + Math.random() * boxInner) | 0,
          'y': (y * pxBox + boxInnerOffset + Math.random() * boxInner) | 0
        };
      }
    }

    // Finally, add everything in our grid to the vertexes in this Graph
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.vertexes.push(grid[y][x]);
      }
    }
  }

  /**
   * Dump graph data to the console
   */
  dump() {
    let s;

    for (let v of this.vertexes) {
      if (v.pos) {
        s = v.value + ' (' + v.pos.x + ',' + v.pos.y + '):';
      } else {
        s = v.value + ':';
      }

      for (let e of v.edges) {
        s += ` ${e.destination.value}`;
      }
      console.log(s);
    }
  }

  /**
   * BFS
   */
  bfs(start) {

    // Psuedo-Code for BFS:

    // 1. Pick a Vertex upon which to begin
    // 2. Push it to a Queue List of visited vertexes
    // 3. Go to first item in Queue List, check Edges for which it connects
    // 4. If visited, pass over
    // 5. If not not visited, add to destination Queue, mark visited
    // 6. Mark each node as parent according its placement in Queue
    // 7. Move to next edge unless all edges accounted for
    // 8. When array includes all vertexes, BFS complete
  
    // !!! IMPLEMENT ME

    const queue = [start];
    let group = randomColor();

    while (queue.length > 0) {
      const currentNode = queue[0];

      if (currentNode.fillColor === 'white')
        currentNode.fillColor = group;

      currentNode.edges.forEach(edge => {
        const { destination } = edge;

        if (destination.fillColor === 'white') {
          queue.push(destination);
          console.log(queue);
          destination.fillColor = group;
        }

        destination.parent = currentNode;

      });

      queue.shift();
      if (queue.length === 0) {
        for (let i = 0; i < this.vertexes.length; i++) {
          if (this.vertexes[i].fillColor === 'white') {
            group = randomColor();
            queue.push(this.vertexes[i]);
            break;
          }
        }
      }
    }

  }

  /**
   * Get the connected components
   */
  getConnectedComponents() {
    // !!! IMPLEMENT ME
  }
}
