import React from 'react';
import TimeRemaining from './TimeRemaining.jsx';

class TimeCardEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      emoji: this.props.timecard.emoji,
      title: this.props.timecard.title,
      date: this.props.timecard.date
    }
  }

  render() {
    return (
      <div className="time-card-entry">
        <div className="time-card-row-info">
          <div className="emoji-picker">
            {this.state.emoji}
          </div>
          <div className="time-card-title">
            {this.state.title}
          </div>
        </div>
        <div className="time-remaining">
          <TimeRemaining date={this.state.date} />
        </div>
      </div>
    );
  }
}
 
export default TimeCardEntry;