import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'

export default class QueuePage extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>&lt; Home</Link>
        <h2>Ticket Details</h2>

        <Form>
          <Form.Group controlId="formTicket">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

          <Form.Group controlId="formRepair">
            <Form.Label>Repair</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

          <Container>
            <Row>
              <Col>
                <Link to="/CreateTicket">
                  <Button variant="primary" size="lg">Notify TE</Button>
                </Link>
              </Col>
              <Col>
                <Link to="/Queue">
                  <Button variant="primary" size="lg">Complete</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    )
  }
}
