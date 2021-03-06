import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  handleClick = (event) => {
    this.setState({
      color: '#333'
    })
  }


  render() {
    return (
      <div onClick={this.handleClick} style={{backgroundColor: this.state.color}} className="cell">
      </div>
    )
  }
}
