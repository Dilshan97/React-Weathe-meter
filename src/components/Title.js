import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div>
          <h4>{`Weather in ${this.props.city}`},{this.props.country}</h4>
          <h1><img src={`img/${this.props.icon}.png`}/>{this.props.temperture} &#8451;</h1>
          <h6>{this.props.description}</h6>
      </div>
      
    );
  }
}

export default Title;
