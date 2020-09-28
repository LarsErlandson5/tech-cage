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
import ImageModal from '../../components/ImageModal'

export default class TicketDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket: {},
      showModal: false
    }
  }

  componentDidMount = () => {
    this.getTicket(new URLSearchParams(window.location.search).get('id'));
  }

  getTicket = async (id) => {
    let ticket = await axios.get(`${process.env.REACT_APP_SERVER}/api/getTicket`, {
      params: {
        id
      }
    });

    this.setState({ ticket: ticket.data });
  }

  postSlackNotification = async (e) => {
    e.preventDefault();

    this.notifyBtn.setAttribute('disabled', 'disabled');

    const { line, station, status, priority, description } = { ...this.state.ticket };

    const data = {
      'text': `Ticket Alert:\nLine: ${line}\nStation: ${station}\nStatus: ${status}\n Priority: ${priority}\n Description: ${description}`
    }

    let res = await axios.post(process.env.REACT_APP_SLACK_WEBHOOK, JSON.stringify(data), {
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
            <Col>
              <h4>Ticket Details</h4>
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

                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  {this.state.ticket.image ? <Button variant="secondary" onClick={() => { this.setState({ showModal: true }) }}>Open Image</Button> : null}
                  <ImageModal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }} ticket={this.state.ticket} />
                </Form.Group>

                <Container>
                  <Row>
                    <Col>
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={this.postSlackNotification}
                        ref={notifyBtn => { this.notifyBtn = notifyBtn; }}
                      >Notify TE</Button>
                    </Col>
                    <Col>
                      <Link to="/TicketList">
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
