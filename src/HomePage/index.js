import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './index.css'

export default class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button variant="primary" size="lg" onClick={() => this.props.onClick('displayCreateTicket')}>Create a Ticket</Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg" onClick={() => this.props.onClick('displayTicketList')}>List Tickets</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
