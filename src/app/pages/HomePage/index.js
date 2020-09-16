import React from 'react'
import {
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './index.css';

export default class HomePage extends React.Component {

  logOut = (name) => {
    document.cookie = 'techCage=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = '/';
  }

  render() {
    return (
      <Container>
        <button onClick={this.logOut}>Log out</button>
        <Row>
          <Col>
            <Link to="/CreateTicket">
              <Button variant="primary" size="lg">Create a Ticket</Button>
            </Link>
          </Col>
          <Col>
            <Link to="/Queue">
              <Button variant="primary" size="lg">List Tickets</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}
