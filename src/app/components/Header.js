import React, { Component } from "react";
import {NavLink} from "react-router-dom";

// Class component
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Header render called");

    // Using deconstruct as a use case
    let { appTitle } = this.props;
    return (
      <header>
        <h2>{appTitle} - {this.props.children}</h2>
        <hr />
        <NavLink to="/" exact className="button" activeClassName="success">Home</NavLink>
        <NavLink to="/products" className="button" activeClassName="success">Products</NavLink>
        <NavLink to="/cart" className="button" activeClassName="success">Cart</NavLink>
        <NavLink to="/redux-cart" className="button" activeClassName="success">Redux Cart</NavLink>
        <NavLink to="/counter" className="button" activeClassName="success">Counter</NavLink>
        <NavLink to="/aboutus" className="button" activeClassName="success">About Us</NavLink>
      </header>
    );
  }
}
