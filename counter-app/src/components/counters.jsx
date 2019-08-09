import React, { Component } from "react";
import Counter from "./counter";
import { METHODS } from "http";

class Counters extends Component {
  state = {
      counters: [
          {id: 1, value: 5 },
          {id: 2, value: 0 },
          {id: 3, value: 0 },
          {id: 4, value: 0 },
      ]
  };

  handleDelete = () => {
      console.log('Event Handler called');
  }; 
  
  render() {
    return (
      <div>
       {this.state.counters.map(counter => 
        <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}/>)}
      </div>
    );
  }
}

export default Counters;


