import React from 'react';
import moment from 'moment';
import countdown from 'countdown';
require('moment-countdown');

class TimeRemaining extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      start: moment(),
      end: moment(this.props.date),
      timer: null
    }
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.state.timer = setInterval( () => {
      this.setState({start: moment()}, () => {

        // stop checking time after event is over
        if (this.state.start > this.state.end) {
          clearInterval(this.state.timer);
        }
      });
    }, 1000);
  }

  render() {

    var message;

    if (this.state.start < this.state.end) {
      var countdownMessage = this.state.end.countdown(
        this.state.now, countdown.DAYS|countdown.HOURS|countdown.MINUTES
      ).toString();

      // render seconds if component is loaded within the past minute
      if (countdownMessage === '') {
        message = this.state.end.countdown(this.state.now, countdown.SECONDS).toString();
      } else {
        message = countdownMessage;
      }
    }
    
    if (message === undefined || message === '') {
      message = 'DONE ✅';
    }

    return (
      <span>
        {message}
      </span>
    );
  }
}
 
export default TimeRemaining;