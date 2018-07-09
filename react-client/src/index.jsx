import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TimeCardAdder from './components/TimeCardAdder.jsx';
import TimeCardList from './components/TimeCardList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timecards: []
    }
    this.getTimeCards = this.getTimeCards.bind(this);
  }

  componentDidMount() {
    this.getTimeCards();
  }

  getTimeCards() {
    axios.get('/timecards')
    .then( (response) => {
      const timecards = response.data;
      this.setState({timecards});
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  render () {
    return (
      <div>
        <h1>MINUS</h1>
        <div className="card">
          <TimeCardAdder getTimeCards={this.getTimeCards}/>
        </div>
        <h1>Your TimeCards</h1>
        <div className="card">
          <TimeCardList timecards={this.state.timecards}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));