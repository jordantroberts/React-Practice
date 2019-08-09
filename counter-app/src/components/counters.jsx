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
      // we then want to pass a reference to this function using props to our child component (our Counter component)
  }; 
  
  render() {
    return (
      <div>
       {this.state.counters.map(counter => 
        <Counter key={counter.id} value={counter.value}/>)}
      </div>
    );
  }
}

export default Counters;


