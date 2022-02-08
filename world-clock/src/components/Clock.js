import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("hey");
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h2>CLOCK</h2>
        <div className="time-box">{this.state.date.toLocaleString()}</div>
      </>
    );
  }
}

export default Clock;
