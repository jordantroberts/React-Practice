import React, { Component } from "react";

class Counter extends Component {

state = { 
    value: this.props.value
};

handleIncrement = () => {
    this.setState({value: this.state.value+1})
};

render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}
        className="btn-secondary btn-sm"
        >
            Increment
        </button>
        <button className="btn btn-danger btn-sm m2">Delete</button>
      </div>
    );
  }

getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
    }

  formatCount() {
      // picking the count property from object and storing as a separate constant called count.
      const {value} = this.state; 
      return value === 0 ? "Zero" : value;
  }


}

export default Counter;
