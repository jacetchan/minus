import React from 'react';
import TimeCardDatePicker from './TimeCardDatePicker.jsx';

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
    this.handleDateSelect = this.handleDateSelect.bind(this);
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

  handleDateSelect(selection) {
    this.setState({date: selection});
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
            <TimeCardDatePicker handleDateSelect={this.handleDateSelect}/>
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