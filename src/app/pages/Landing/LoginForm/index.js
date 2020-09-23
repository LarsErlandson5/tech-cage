import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap'
import Axios from 'axios';
import { Cookies } from 'react-cookie'

export default class LoginPage extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    Axios.post('http://localhost:3001/api/validate', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        if (response.data === true) {
          Cookies.set('techCage', this.state.email, '/')
          window.location.href = '/HomePage';
        } else {
          alert('Incorrect!')
        }
      })
      .catch(error => {
        console.log('Unable to log in at this time, verify your credentials and try again.', error);
      });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>Login</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.onChangeEmail} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.onChangePassword} />
              </Form.Group>
              <Button variant="primary" type="submit">Sign In</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
