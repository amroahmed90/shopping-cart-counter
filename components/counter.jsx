import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //we need to define an object styles to be used in formatting the span
  styles = {
    fontSize: 10,
    fontweight: "bold"
  };

  //instead of adding unnecessary div, we can use React.Fragment
  //if we want to add more than one element; e.g <h1> and <button>, we need to wrap it
  //with a <div> or <React.Fragment>

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = product => {
    console.log(product.id);
    this.setState({ count: this.state.count + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>This array has no tags!</p>;
    } else
      return (
        <ul>
          {this.state.tags.map(tag => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      );
  }

  //a function that decides the attribute of the count
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  //A function is defined to render the count dynamically
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
