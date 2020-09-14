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

export default class QueuePage extends React.Component {
  onClick = (event) => {
    this.setState({ selectedName: event }, () => {
      this.props.history.push(`TicketDetails?id=${event}`);
    });
  }

  render() {
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
                  <tr onClick={this.onClick.bind(this, 'GR1310')}>
                    <td>GR1310</td>
                    <td>{new Date().toLocaleString('en-US')}</td>
                  </tr>
                  <tr>
                    <td>G08</td>
                    <td>{new Date().toLocaleString('en-US')}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
