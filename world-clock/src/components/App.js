import React from "react";
import Clock from "./Clock";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import "../styles/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVissible: "clock",
    };
  }

  handleUI = (value) => {
    switch (value) {
      case "clock":
        return <Clock />;

      case "countdown":
        return <Countdown />;

      case "stopwatch":
        return <Stopwatch />;
    }
  };

  handleTimer = (value) => {
    this.setState({
      currentVissible: value,
    });
  };

  render() {
    return (
      <>
        <div className="headings">
          <h2>{this.handleUI(this.state.currentVissible)}</h2>
        </div>

        <div className="btns">
          <button
            className={
              this.state.currentVisible === "clock"
                ? "btn btn-secondary"
                : "btn btn-primary"
            }
            onClick={() => this.handleTimer("clock")}
          >
            Clock
          </button>
          <button
            className={
              this.state.currentVisible === "stopwatch"
                ? "btn btn-secondary"
                : "btn btn-primary"
            }
            onClick={() => this.handleTimer("stopwatch")}
          >
            Stopwatch
          </button>
          <button
            className={
              this.state.currentVisible === "countdown"
                ? "btn btn-secondary"
                : "btn btn-primary"
            }
            onClick={() => this.handleTimer("countdown")}
          >
            Countdown
          </button>
        </div>
      </>
    );
  }
}

export default App;
