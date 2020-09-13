import React from 'react'
import { Link } from 'react-router-dom'
import { FormControl, InputGroup, Table } from 'react-bootstrap'

export default class QueuePage extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>&lt; Home</Link>
        <h2>Ticket List</h2>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="filter">&#x1F50D;</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="filter"
            aria-label="filter"
            aria-describedby="filter"
          />
        </InputGroup>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GR1310</td>
              <td>{new Date().toLocaleString('en-US')}</td>
            </tr>
            <tr>
              <td>G08</td>
              <td>{new Date().toLocaleString('en-US')}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
