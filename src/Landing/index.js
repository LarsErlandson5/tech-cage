import React from 'react';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'


const Landing = props => {

  const handleSuccessfulAuth = e => {
    e.preventDefault();
  }

  return (
    <div>
      <br/>
      <div>
        <LoginForm setCookieApp={props.setCookieApp} handleLogin={props.handleLogin}/>
      </div>
      <div>
        <SignUpForm handleSuccessfulAuth={handleSuccessfulAuth}/>
      </div>
    </div>
  )
};

export default Landing;
