import React, { Component } from "react";
import "./Counter.css";
// import Button from "../Button/Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.decreaseCount}>-</button>
        <p className="count">{this.state.count}</p>
        <button onClick={this.increaseCount}>+</button>
      </div>
    );
  }
  increaseCount = () => {
    let newCount = this.state.count + this.props.step;
    if (this.state.count + this.props.step <= this.props.max) {
      this.setState({
        count: newCount,
      });
    }
  };
  decreaseCount = () => {
    let newCount = this.state.count - this.props.step;
    if (this.state.count - this.props.step >= this.props.min) {
      this.setState({
        count: newCount,
      });
    }
  };
}

export default Counter;
