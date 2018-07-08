import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
class TimeCardDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(momentDate) {
    this.setState({startDate: momentDate}, () => {
      this.props.handleDateSelect(momentDate.toDate());
    });
  }
 
  render() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="LLL"
      timeCaption="Time"
    />;
  }
}

export default TimeCardDatePicker;

