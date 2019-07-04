import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 }
    ]
  };
  handleReset = () => {
    const counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    // clone the counters array from the state

    /* const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index].value++; 
  */
    //A better implementation
    const counters = this.state.counters.map(c => {
      if (c.id === counter.id) c.value++;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
