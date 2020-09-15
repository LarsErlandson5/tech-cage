import React from 'react'
import { Link } from 'react-router-dom'
import {
  FormControl,
  InputGroup,
  Table,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import Ticket from './Ticket'

export default class QueuePage extends React.Component {
  getTickets = () => {
    //TODO: GET tickets from service
  }

  render() {
    const tickets = [
      { id: 1, line: 'ventilation', station: 'A1', dateCreated: new Date(), priority: 'high' },
      { id: 2, line: 'refrigeration', station: 'B2', dateCreated: new Date(), priority: 'medium' },
      { id: 3, line: 'range', station: 'C3', dateCreated: new Date(), priority: 'medium' },
      { id: 4, line: 'ventilation', station: 'A1', dateCreated: new Date(), priority: 'low' },
      { id: 5, line: 'ventilation', station: 'B1', dateCreated: new Date(), priority: 'low' },
      { id: 6, line: 'ventilation', station: 'C1', dateCreated: new Date(), priority: 'medium' },
      { id: 7, line: 'ventilation', station: 'A2', dateCreated: new Date(), priority: 'high' },
      { id: 8, line: 'ventilation', station: 'A1', dateCreated: new Date(), priority: 'high' }
    ];

    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Link to="/">&lt; Home</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Ticket Queue</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="filter">
                    <span role="img" aria-label="search">&#x1F50D;</span>
                  </InputGroup.Text>
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
                  <Ticket tickets={tickets} />
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
