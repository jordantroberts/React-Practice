import React, { Component } from "react";
// convert this component into a Stateless Functional Component (using a function instead of class):

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
          </a>
        </nav>
      );
};

class NavBar extends Component {
  render() {
    
  }
}

export default NavBar;
