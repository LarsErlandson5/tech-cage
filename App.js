import React from 'react';
import './App.css';
import HomePage from './HomePage'
import CreateTicketPage from './CreateTicketPage'
import ViewTicketPage from './ViewTicketPage'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayHomePage: true,
      displayTicketList: false,
      displayCreateTicket: false
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.displayHomePage ? <HomePage /> : null}
          {this.state.displayCreateTicket ? <CreateTicketPage /> : null}
          {this.state.displayTicketList ? <ViewTicketPage /> : null}
        </div>
      </div>
    );
  }
}
