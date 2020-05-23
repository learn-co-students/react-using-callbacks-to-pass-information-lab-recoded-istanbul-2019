import React, { Component } from 'react';

export default class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
    this.modifyColor = this.modifyColor.bind(this);
  }

  modifyColor = (e) => this.props.updateKey(e.target.style.backgroundColor);

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{ backgroundColor: str }} onClick={this.modifyColor} />
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
/*
function Parent() {
  const [color, setColor] = useState('');
  function handleChildClick(color) {
    setColor(color);
  }
  return (
    <>
      <h1>selected color: {color}</h1>
      {['green','red','blue'].map((color) => (
        <Child color={color} onChildClick={handleChildClick} ... />
      ))}
    </>
  )
}
function Child({ color,  onChildClick }) {
  function handleClick(event) {
    onChildClick(event.target.name); // pass any argument to the callback
  }
  return (
    <button name={color} onClick={handleClick}>{color}</button>
  )
}
*/