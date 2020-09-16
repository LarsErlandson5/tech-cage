import React from 'react';
import HomePage from './pages/HomePage'
import CreateTicketPage from './pages/CreateTicketPage'
import TicketDetailsPage from './pages/TicketDetailsPage'
import QueuePage from './pages/QueuePage'
import LoginForm from './pages/Landing/LoginForm'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import ProtectedRoute from './ProtectedRoute';

export default class App extends React.Component {
  constructor(){
    super()
    
    function getCookie(cname) {
      var name = cname + '=';
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }
    console.log(getCookie('techCage'))
    this.state = {
      userinfo: getCookie('techCage')
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <ProtectedRoute exact path='/CreateTicket' user={this.state.userinfo} component={CreateTicketPage}/>
            <ProtectedRoute exact path='/Queue' user={this.state.userinfo} component={QueuePage}/>
            <ProtectedRoute exact path='/TicketDetails' user={this.state.userinfo} component={TicketDetailsPage}/>
            <ProtectedRoute exact path='/HomePage' user={this.state.userinfo} component={HomePage}/>
            <Route path="/" component={LoginForm} exact />

          </Switch>
        </div>
      </Router>
    );
  }
}
