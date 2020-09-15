import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Form,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import QRModal from '../../components/QRModal'
import axios from 'axios'
import './index.css'
import qr_code from '../../images/qr_code.png'

export default class CreateTicketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      showModal: false,
      line: this.getValueFromQueryString('line'),
      station: this.getValueFromQueryString('station'),
      priority: this.getValueFromQueryString('priority'),
      description: ''
    };
  }

  getValueFromQueryString(key) {
    const queryString = window.location.search.substring(1);
    const keyValuePairs = queryString.split('&');

    for(let item of keyValuePairs) {
      let keyValue = item.split('=');
      if (decodeURIComponent(keyValue[0]) === key) {
        return decodeURIComponent(keyValue[1]);
      }
    };

    return;
  }

  handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      await axios.post('http://localhost:3001/api/createTicket', {
        line: this.state.line,
        station: this.state.station,
        priority: this.state.priority,
        description: this.state.description
      });
      this.props.history.push('/');
    }

    this.setState({
      validated: true
    });
  }

  render() {
    return (
      <div>
        <QRModal isDisplayed={this.state.showModal} /> {/* TODO: Fix issue after modal is loaded */}
        <Container>
          <Row>
            <Col>
              <Link to="/">&lt; Home</Link>
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: 'auto' }}>
              <h4>Create Ticket</h4>
            </Col>
            <Col xs={4}>
              <Button
                variant="outline-secondary"
                id="qr_code"
                onClick={() => { this.setState({ showModal: true }) }}
              >
                <img src={qr_code} alt={qr_code} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Form.Group controlId="formLine">
                  <Form.Label>Line</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={this.state.line}
                    required>
                    <option value=''>Select Line...</option>
                    <option value='range'>Range</option>
                    <option value='refrigeration'>Refrigeration</option>
                    <option value='ventilation'>Ventilation</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">Please select a Line.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formStation">
                  <Form.Label>Station</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={this.state.station}
                    required>
                    <option value='' >Select Station...</option>
                    <option value='a1'>A1</option>
                    <option value='b2'>B2</option>
                    <option value='c3'>C3</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">Please select a Station.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPriority">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={this.state.priority}
                    required>
                    <option value=''>Select Priority...</option>
                    <option value='critical'>Critical</option>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                  </Form.Control
                  ><Form.Control.Feedback type="invalid">Please select a Priority.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="5" required />
                  <Form.Control.Feedback type="invalid">Please enter a description.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
