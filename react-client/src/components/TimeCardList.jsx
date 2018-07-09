import React from 'react';
import TimeCardEntry from './TimeCardEntry.jsx';

class TimeCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // TO DO - remove if not necessary
      timecards: this.props.timecards
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.timecards !== this.props.timecards){
      this.setState({timecards: nextProps.timecards});
    }
  }

  render() {
    return (
      <div id="time-card-list">
        {this.state.timecards.map( (timecard, i) => {
          console.log(timecard, 'mapping');
          return <TimeCardEntry timecard={timecard} key={i}/>
        })}
      </div>
    );
  }
}
 
export default TimeCardList;