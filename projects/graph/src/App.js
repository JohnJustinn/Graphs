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

    ctx.fillStyle = '#339999'
    ctx.fillRect(25, 25, 500, 500);   
    ctx.save();                  
   
    ctx.fillStyle = '#cc6633';      
    ctx.fillRect(25, 25, 300, 275); 
    ctx.save();                  
    
    ctx.fillStyle = '#FFF';      
    ctx.globalAlpha = 0.5; 
    ctx.fillRect(10, 10, 230, 210);   
  
    ctx.restore();               
    ctx.fillRect(50, 50, 75, 75);   
  
    ctx.restore();               
    ctx.fillRect(75, 75, 50, 50);   
  
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
