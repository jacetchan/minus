import React from 'react';
import TimeCardDatePicker from './TimeCardDatePicker.jsx';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class TimeCardAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      emoji: '✍️',
      title: '',
      date: new Date(),
      showPicker: false
    }

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.handleEmojiPickerClick = this.handleEmojiPickerClick.bind(this);
    this.handleMakeEmojiSelection = this.handleMakeEmojiSelection.bind(this);
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
    // allow successful adds ONLY when event title exists
    if (this.state.title !== '') {
      console.log(
        `emoji: ${this.state.emoji}`, 
        `title: ${this.state.title}`, 
        `date: ${this.state.date}`
      );
      // TODO - make POST request to server. call a helper function.
      // TODO - may want to clear the form fields.
    }
    e.preventDefault();
  }

  handleTitleUpdate(e) {
    this.setState({title: e.target.value});
  }

  handleDateSelect(selection) {
    this.setState({date: selection});
  }

  handleEmojiPickerClick(e) {
    this.setState({showPicker: !this.state.showPicker});
  }

  handleMakeEmojiSelection(selection) {
    this.setState({
      emoji: selection, 
      showPicker: !this.state.showPicker
    });
  }

  render() {

    if (this.state.showPicker) {
      return (
        <div id="time-card-adder">
          <form onSubmit={this.handleAddButton}>
            <div className="time-card-adder-row-info">
              <div className="emoji-picker" onClick={this.handleEmojiPickerClick}>
                {this.state.emoji}
              </div>
              <div className="time-card-add-title">
                <input 
                  type="text" 
                  placeholder="Add an event title"
                  value={this.state.title}
                  onChange={this.handleTitleUpdate}
                />
              </div>
            </div>
            <div className="time-card-emoji-picker-box">
              <Picker 
                title='Pick your emoji…'
                emoji='point_up' 
                onClick={(emoji) => {
                  this.handleMakeEmojiSelection(emoji.native);
                }}
              />
            </div>
            {/* <div className="time-card-row-date-picker">
              <TimeCardDatePicker handleDateSelect={this.handleDateSelect}/>
            </div>
            <div className="time-card-add-button">
              <button>+</button>
            </div> */}
          </form>
        </div>
      )
    } else {
      return (
        <div id="time-card-adder">
          <form onSubmit={this.handleAddButton}>
            <div className="time-card-adder-row-info">
              <div className="emoji-picker" onClick={this.handleEmojiPickerClick}>
                {this.state.emoji}
              </div>
              <div className="time-card-add-title">
                <input 
                  type="text" 
                  placeholder="Add an event title"
                  value={this.state.title}
                  onChange={this.handleTitleUpdate}
                />
              </div>
            </div>
            <div className="time-card-row-adder">
              <div className="time-card-row-date-picker">
                <TimeCardDatePicker handleDateSelect={this.handleDateSelect}/>
              </div>
              <div className="time-card-add-button">
                <button>+</button>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
}
 
export default TimeCardAdder;