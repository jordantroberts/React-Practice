import React, { Component } from "react";
import Counter from "./counter";
import { METHODS } from "http";


class Counters extends Component {

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
        onClick={this.props.onReset} 
        className="btn btn-primary btn-small m-2">Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
