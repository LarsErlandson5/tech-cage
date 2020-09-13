import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
import './index.css'

export default class HomePage extends React.Component {
  render() {
    return (
      <Container>
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
