import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  handelClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  render() {
    return (
      <div onClick={this.handelClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}