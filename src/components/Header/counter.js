import React from "react";
import { Button } from "react-bootstrap";
import Particle from "./particle";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const countDownDate = "May 5 2020 15:00:00 GMT +0100";
      const t = Date.parse(countDownDate) - Date.parse(new Date());
      const second = Math.floor((t / 1000) % 60);
      const minute = Math.floor((t / 1000 / 60) % 60);
      const hour = Math.floor(t / (1000 * 60 * 60));

      this.setState(({ hours, minutes, seconds }) => ({
        hours: hour,
        minutes: minute,
        seconds: second,
      }));
    }, 1000);
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="counter-container">
        <Particle />
        <div className="counter">
          <h1>gifts in time for christmas</h1>
          <p>guaranteed delivery ends in :</p>
          <h2>
            <span className="digits">{hours < 10 ? `0${hours}` : hours}</span>:
            <span className="digits">
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>{" "}
            :
            <span className="digits">
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </h2>
          <div className="buttons">
            <Button size="lg" variant="primary">
              ladies
            </Button>

            <Button size="lg" variant="primary">
              mens
            </Button>

            <Button size="lg" variant="primary">
              childrens
            </Button>
          </div>
        </div>
        <Particle />
      </div>
    );
  }
}
export default Counter;
