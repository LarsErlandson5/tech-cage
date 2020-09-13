import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Dropdown, Form } from 'react-bootstrap'
import './index.css'

export default class CreateTicketPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">&lt; Home</Link>
        <h2>Create Ticket</h2>
        <Form>
          <Form.Group controlId="formLine">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="line">Select Line</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Range</Dropdown.Item>
                <Dropdown.Item>Refrigeration</Dropdown.Item>
                <Dropdown.Item>Ventilation</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group controlId="formStation">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="station">Select Station</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>A1</Dropdown.Item>
                <Dropdown.Item>B2</Dropdown.Item>
                <Dropdown.Item>C3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group controlId="formPriority">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="priority">Priority</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Critical</Dropdown.Item>
                <Dropdown.Item>High</Dropdown.Item>
                <Dropdown.Item>Medium</Dropdown.Item>
                <Dropdown.Item>Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
