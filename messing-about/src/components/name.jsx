import React, { Component } from 'react';

class Name extends Component{
    render () {
      return (
        <div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.age}</h2>
        </div>
      );
     }
  }

  export default Name; 