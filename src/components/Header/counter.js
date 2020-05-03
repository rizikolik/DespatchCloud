import React from "react";
import { Button } from "react-bootstrap";

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
      var second = Math.floor((t / 1000) % 60);
      var minute = Math.floor((t / 1000 / 60) % 60);
      var hour = Math.floor(t / (1000 * 60 * 60));

      //  const count = `   ${days} + "d " + ${hours} + "h "  + ${minutes}+ "m " + ${seconds} + "s "`;
      this.setState(({ hours, minutes, seconds }) => ({
        hours: hour,
        minutes: minute,
        seconds: second,
      }));
    }, 1000);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="counter">
        <h1>gifts in time for christmas</h1>
        <p>guaranteed delivery ends in :</p>
        <h1 className="counter-digits">
          {hours}:{minutes} :{seconds}
        </h1>
        <div className="button-container">
          <Button size="lg" variant="primary">
            ladies
          </Button>
          {"     "}
          <Button size="lg" variant="primary">
            mens
          </Button>
          {"     "}
          <Button size="lg" variant="primary">
            childrens
          </Button>
          {"     "}
        </div>
      </div>
    );
  }
}
export default Counter;
