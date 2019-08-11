import React, { Component } from 'react';

class Details extends Component{
    render () {
      return (
        <div>
          <h6>{this.props.name}</h6>
          <h6>{this.props.age}</h6>
        </div>
      );
     }
  }

  export default Details; 