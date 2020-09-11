import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './index.css'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button variant="primary" size="lg">Create a Ticket</Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">List Tickets</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
