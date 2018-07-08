import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class TimeCardAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      emoji: '✍️',
      title: 'Hack Reactor Graduation',
      date: new Date()
    }

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
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

  handleAddButton(e) {
    console.log(`emoji: ${this.state.emoji}`, `title: ${this.state.title}`, 
      `date: ${this.state.date}`);
    e.preventDefault();
  }

  handleTitleUpdate(e) {
    this.setState({title: e.target.value});
  }

  render () {
    return (
      <div id="time-card-adder">
        <form onSubmit={this.handleAddButton}>
          <div className="time-card-row-info">
            <div className="emoji-picker">✍️</div>
            <div className="time-card-add-title">
              <input 
                type="text" 
                placeholder="Add an event title"
                value={this.state.title}
                onChange={this.handleTitleUpdate}
              />
            </div>
          </div>
          <div className="time-card-row-date-picker">
            16 Days 3 Hours 15 Min
          </div>
          <div className="time-card-add-button">
            <button>+</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TimeCardAdder;