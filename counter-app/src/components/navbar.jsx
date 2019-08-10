import React, { Component } from "react";
// convert this component into a Stateless Functional Component (using a function instead of class):

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};


export default NavBar;
