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
        <Row>
          <Col>
            <Button variant="secondary" onClick={this.logOut}>Sign Out</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/TicketList">
              <Button variant="info" size="lg">List Tickets</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/CreateTicket">
              <Button variant="danger" size="lg">Create a Ticket</Button>
            </Link>
          </Col>
        </Row>
       
      </Container>
    )
  }
}
