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



export default class QueuePage extends React.Component {

  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(window.location.search);
    const ticketId = urlParams.get('id');
    this.getTicket(ticketId)
    this.state = {ticket:{_id: ""}}

  }

  getTicket = async (id) => {
    let ticket = await axios.get('http://localhost:3001/api/getTicket', {
      params: {
        id
      }
      });
     
    this.setState({ ticket: ticket.data })
     
    console.log(this.state);


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
            <Col style={{margin: 'auto'}}>
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
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
