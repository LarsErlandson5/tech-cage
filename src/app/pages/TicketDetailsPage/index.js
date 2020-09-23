import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Alert,
  Form,
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap'
import qr_code from '../../images/qr_code.png'

export default class TicketDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket: {}
    }
  }

  componentDidMount = () => {
    this.getTicket(new URLSearchParams(window.location.search).get('id'));
  }

  getTicket = async (id) => {
    let ticket = await axios.get('http://localhost:3001/api/getTicket', {
      params: {
        id
      }
    });

    this.setState({ ticket: ticket.data });
  }

  postSlackNotification = async (e) => {
    e.preventDefault();

    const webhookUrl = 'https://hooks.slack.com/services/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';

    const { line, station, status, priority, description } = { ...this.state.ticket };

    const data = {
      'text': `Ticket Alert: ${line} \n${station} \n${status} \n${priority} \n${description}`
    }

    let res = await axios.post(webhookUrl, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [(data, headers) => {
        delete headers.post['Content-Type']
        return data
      }]
    });

    if (res.status === 200) {
      alert('Message Sent!')
    } else {
      alert('There was an error.  Please try again later.')
    }
  }

  render() {
    return this.state.ticket.hasOwnProperty('station')
      ? <div>
        <Container>
          <Row>
            <Col>
              <Link to="/TicketList">&lt; Back</Link>
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: 'auto' }}>
              <h4>Ticket Details</h4>
            </Col>
            <Col xs={4}>
              <Button variant="outline-secondary" id="qr_code">
                <img src={qr_code} alt={qr_code} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert variant='danger'>{this.state.ticket.station}</Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    disabled
                    value={this.state.ticket.description}
                  />
                </Form.Group>

                <Form.Group controlId="formRepair">
                  <Form.Label>Repair</Form.Label>
                  <Form.Control as="textarea" rows="5" />
                </Form.Group>

                <Container>
                  <Row>
                    <Col>
                      <Link to="/CreateTicket">
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={this.postSlackNotification}
                        >Notify TE</Button>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="/Queue">
                        <Button
                          variant="primary"
                          size="lg"
                        >Complete</Button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      : null
  }
}
