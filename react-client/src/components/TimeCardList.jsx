import React from 'react';
import TimeCardEntry from './TimeCardEntry.jsx';

class TimeCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timecards: [
        {emoji: '🎓', title: 'Hack Reactor Graduation', date: new Date('July 8, 2018 13:27:35')},
        {emoji: '🌵', title: 'Move to Austin Texas', date: new Date('July 10, 2018 15:27:40')},
        {emoji: '💻', title: 'Become an Engineer', date: new Date('November 9, 2018 00:00:00')}
      ]
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render() {
    return (
      <div id="time-card-list">
        {this.state.timecards.map( (timecard, i) => {
          return <TimeCardEntry timecard={timecard} key={i}/>
        })}
      </div>
    );
  }
}
 
export default TimeCardList;