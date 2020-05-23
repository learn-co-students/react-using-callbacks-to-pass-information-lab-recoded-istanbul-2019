import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
    this.modifyColor2 = this.modifyColor2.bind(this);
  }
  modifyColor2 = () => {
    this.setState({
      color: this.props.clickedColor
    })
  }
  render() {
    return (
      <div className="cell" onClick={this.modifyColor2} style={{ backgroundColor: this.state.color }}>
      </div>
    )
  }
}