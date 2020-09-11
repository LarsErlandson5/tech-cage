import React from 'react';
import './App.css';
import HomePage from './HomePage'
import CreateTicketPage from './CreateTicketPage'
import QueuePage from './QueuePage'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayHomePage: true,
      displayTicketList: false,
      displayCreateTicket: false
    };
  }

  onClick = (component) => {
    this.setState({
      displayHomePage: false,
      displayTicketList: false,
      displayCreateTicket: false,
      [component]: true
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.displayHomePage ? <HomePage onClick={this.onClick} /> : null}
          {this.state.displayCreateTicket ? <CreateTicketPage /> : null}
          {this.state.displayTicketList ? <QueuePage /> : null}
        </div>
      </div>
    );
  }
}
