import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
const canvasWidth = 640;
const canvasHeight = 480;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');

    // Clear it
    // ctx.fillStyle = '#ccff99';
    // ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // for (var i = 0; i < 30; i++) {
    //   for (var j = 0; j < 30; j++) {
    //     ctx.fillStyle =
    //       'rgb(' +
    //       Math.floor(300 - 5 * i) +
    //       ', ' +
    //       Math.floor(255 - 10 * j) +
    //       ', 0)';
    //     ctx.fillRect(j * 50, i * 25, 25, 25);
    //   }
    // }

    // for (var i = 0; i < 35; i++) {
    //   for (var j = 0; j < 35; j++) {
    //     ctx.fillStyle =
    //       'rgb(' +
    //       Math.floor(300 - 10 * i) +
    //       ', ' +
    //       Math.floor(255 - 10 * j) +
    //       ', 0)';
    //     ctx.fillRect(j * 70, i * 30, 30, 30);
    //   }
    // }

    ctx.fillStyle = '#990000';
    ctx.fillRect(0, 0, 250, 250);
    ctx.fillStyle = '#3399cc';
    ctx.fillRect(250, 0, 250, 250);
    ctx.fillStyle = '#EDC9AF';
    ctx.fillRect(0, 250, 250, 250);
    ctx.fillStyle = '#669933';
    ctx.fillRect(250, 250, 250, 250);
    ctx.fillStyle = '#FFF';
  
    
    ctx.globalAlpha = 0.050;
  
    
    for (var i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(250, 250, 10 + 10 * i, 0, Math.PI * 2, true);
      ctx.fill();
    }
  

    // !!! IMPLEMENT ME
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
  }

  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight} />;
  }
}

/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph} />
      </div>
    );
  }
}

export default App;
