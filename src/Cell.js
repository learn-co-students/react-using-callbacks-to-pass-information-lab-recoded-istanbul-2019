import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
    taDaColor = () => this.setState({color:this.props.selectedColor})

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.taDaColor}>
      </div>
    )
  }
  
}