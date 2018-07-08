import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TimeCardAdder from './components/TimeCardAdder.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // TODO if necessary. REMOVE if not.
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

  render () {
    return (
      <div>
        <h1>MINUS</h1>
        <TimeCardAdder />
        <h1>Your TimeCards</h1>
        {/* TO DO - create timecardlist component */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));