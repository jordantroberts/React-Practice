import React, { Component } from "react";

class Counter extends Component {

state = { 
    count: 0
};

// constructor(){
//     super()
//     // The super keyword is used to access and call functions on an object's parent.
//     this.handleIncrement = this.handleIncrement.bind(this); 
//     // To set the value of 'this' as otherwise this.state is undefined in handleIncrement
// }
 
handleIncrement = () => {
    console.log('Increment Clicked', this);
}

render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}className="btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
    }

  formatCount() {
      // picking the count property from object and storing as a separate constant called count.
      const {count} = this.state; 
      return count === 0 ? "Zero" : count;
  }


}

export default Counter;
