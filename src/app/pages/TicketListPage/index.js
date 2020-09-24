import React from 'react'
import { Link } from 'react-router-dom'
import {
  FormControl,
  InputGroup,
  Table,
  Container,
  Row,
  Col,
  Spinner
} from 'react-bootstrap'
import axios from 'axios'
import Ticket from './Ticket'

export default class TicketListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: []
    }

    this.getTickets();
  }

  getTickets = async () => {
    let tickets = await axios.get('http://localhost:3001/api/getTickets');

    this.setState({ tickets: tickets.data });
  }

  filter = async (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value.split(':');

      let tickets = await axios.post('http://localhost:3001/api/getTickets', {
        [value[0]]: value[1]
      });

      this.setState({ tickets: tickets.data });
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Link to="/HomePage">&lt; Home</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Ticket List</h4>
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
                  onKeyPress={this.filter}
                />
              </InputGroup>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tickets.length < 0 ? <Spinner animation="border" /> : <Ticket tickets={this.state.tickets} />}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
