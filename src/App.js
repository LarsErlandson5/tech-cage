import React from 'react';
import HomePage from './HomePage'
import CreateTicketPage from './CreateTicketPage'
import TicketDetailsPage from './TicketDetailsPage'
import QueuePage from './QueuePage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/CreateTicket" component={CreateTicketPage} />
            <Route path="/Queue" component={QueuePage} />
            <Route path="/TicketDetails" component={TicketDetailsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
