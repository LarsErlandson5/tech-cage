import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import './index.css'
import qr_code from '../images/qr_code.png'

export default class CreateTicketPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">&lt; Home</Link>
        <h2>Create Ticket</h2>

        Scan Code<br />
        <Button variant="outline-secondary">
          <img src={qr_code} alt={qr_code} />
        </Button>

        <hr />

        <Form>
          <Form.Group controlId="formLine">
            <Form.Label>Line</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Select Line...</option>
              <option>Range</option>
              <option>Refrigeration</option>
              <option>Ventilation</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formStation">
            <Form.Label>Station</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Select Station...</option>
              <option>A1</option>
              <option>B2</option>
              <option>C3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Select Priority...</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}
