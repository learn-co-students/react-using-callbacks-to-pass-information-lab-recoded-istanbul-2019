import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
    this.modifyColor = this.modifyColor.bind(this);
  }
  modifyColor = () => {
    this.setState({
      color: this.props.clickedColor
    })
  }
  render() {
    return (
      <div className="cell" onClick={this.modifyColor} style={{ backgroundColor: this.state.color }}>
      </div>
    )
  }
}