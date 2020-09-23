import React, { useState } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import Axios from 'axios';
import { useCookies } from 'react-cookie'

function LoginForm() {
  const [cookies, setCookie] = useCookies(['techCage']) // eslint-disable-line
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post('http://localhost:3001/api/validate', {
      email: email,
      password: password
    })
      .then(response => {
        if (response.data === true) {
          setCookie('techCage', email, { path: '/' })
          window.location.href = '/homepage';
        } else {
          alert('Incorrect!')
        }
      })
      .catch(error => {
        console.log('Unable to log in at this time, verify your credentials and try again.', error);
      });
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="loginWrap">
            <div className="input">
              <form className="input" onSubmit={handleSubmit}>
                <div>
                  <h5>Login</h5>
                </div>
                <div>
                  <input type="text" name="email" placeholder="Enter your email" onChange={(e) => onChangeEmail(e)} required />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Enter your Access Code" onChange={(e) => onChangePassword(e)} required />
                </div>
                <div>
                  <div>
                    <span>
                      <button className="submit" type="submit">Authorize</button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm
