import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
let holder;
export default class Matrix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }
  updateState = (selectedBackground) => (
    this.setState({
      color: selectedBackground
    })
  )
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} clickedColor={this.state.color} onClick={this.updateState} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {

    return (
      <div id="app">
        <ColorSelector updateKey={this.updateState} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}