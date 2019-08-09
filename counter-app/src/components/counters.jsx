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

  handleDelete = counterId => {
    // we are not going to remove a counter from that array, we create a new array, let React compare and REACT updates the state. 
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters}); 
    // overwriting counters property with counters constant. 
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


