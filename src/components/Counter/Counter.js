import React, { Component } from "react";
import "./Counter.css";
import Button from "../Button/Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count,
    });
  };
  decreaseCount = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count,
    });
  };
  render() {
    return (
      <div className="counter">
        <Button onClick={this.decreaseCount} label="-" />
        <p className="count">{this.state.count}</p>
        <Button onClick={this.increaseCount} label="+" />
      </div>
    );
  }
}

export default Counter;
