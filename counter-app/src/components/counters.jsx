import React, { Component } from "react";
import Counter from "./counter";
import { METHODS } from "http";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // this syntax clones the array - the objects in this array are the exact same objects as the objects in counters array 
    // need to clone the modified counter at the given location so that we don't modify the state DIRECTLY (a no no in React)
    const index = counters.indexOf(counter)
    counter[index] = {...counter}
    counters[index].value++;
    this.setState({counters})
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    // getting a new array of counters, resetting value to 0 and setting the state
    this.setState({counters});
  }; 

  handleDelete = counterId => {
    // we are not going to remove a counter from that array, we create a new array, let React compare and REACT updates the state.
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    // overwriting counters property with counters constant.
  };

  render() {
    return (
      <div>
        <button
        onClick={this.handleReset} 
        className="btn btn-primary btn-small m-2">Reset</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            // This includes everything we need to know about the counter without the messy code.
          />
          // The reason for passing both the counter.id to the key and the id is because the key is used internally for React and we can't access it by our Counter component.
        ))}
      </div>
    );
  }
}

export default Counters;
