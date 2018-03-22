import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    // state is a keyword for react
    this.state = {
      counter: 0
    };
  }

  increment() {
    // //BAD approach, as we are mutating the state directly
    console.log("Before increment ", this.state.counter);
    this.state.counter++;
    console.log("After increment ", this.state.counter);
    // Another bad practice to forcefully update the DOM
    this.forceUpdate();
  }

  decrement() {
    // Keyword setState
    // GOOD
    // async method
    console.log("Before decrement ", this.state.counter);
    this.setState({
      counter: this.state.counter - 1
    });
    console.log("After decrement ", this.state.counter);
  }

  render() {
    console.log("Home render");

    return (
      <div>
        <h2>Home</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.increment()}>+1</button> <button onClick={() => this.decrement()}>-1</button>
      </div>
    );
  }
}
