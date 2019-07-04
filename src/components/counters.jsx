import React, { Component } from "react";
import Counter from "./counter";

//destructed props object of stateless functional component
class Counters extends Component {
  render() {
    const { onDelete, onReset, onIncrement, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
