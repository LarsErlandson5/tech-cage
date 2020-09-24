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

  componentDidMount = async () => {
    let productionLines = await axios.get('http://localhost:3001/api/getProductionLines');
    this.setState({ productionLines: productionLines.data });
  }


  getValueFromQueryString(key) {
    const queryString = window.location.search.substring(1);
    const keyValuePairs = queryString.split('&');

    for (let item of keyValuePairs) {
      let keyValue = item.split('=');
      if (decodeURIComponent(keyValue[0]) === key) {
        return decodeURIComponent(keyValue[1]);
      }
    };

    return;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleImage = (event) => {
    let file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded = (readerEvent) => {
    let binaryString = readerEvent.target.result;
    this.setState({ image: `data:image/png;base64,${btoa(binaryString)}` });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity()) {
      await axios.post('http://localhost:3001/api/createTicket', {
        line: this.state.line,
        station: this.state.station,
        priority: parseInt(this.state.priority),
        description: this.state.description,
        image: this.state.image
      });

      this.props.history.push(`/TicketList`);
    }

    this.setState({
      validated: true
    });
  }

  render() {
    return this.state.hasOwnProperty('productionLines')
      ? <div>
        <QRModal show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }} />
        <Container>
          <Row>
            <Col>
              <Link to="/HomePage">&lt; Home</Link>
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
                <Form.Group controlId="line">
                  <Form.Label>Line</Form.Label>
                  <Form.Control
                    as="select"
                    name="line"
                    defaultValue={this.state.line}
                    onChange={this.handleChange}
                    required
                  >
                    <option value=''>Select Line...</option>
                    {this.state.productionLines.map((line) =>
                      <option key={line._id.toString()} value={line.Name}>
                        {line.Name}
                      </option>
                    )}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">Please select a Line.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="station">
                  <Form.Label>Station</Form.Label>
                  <Form.Control
                    as="select"
                    name="station"
                    defaultValue={this.state.station}
                    onChange={this.handleChange}
                    required
                  >
                    <option value=''>Select Station...</option>
                    <option value='a1'>A1</option>
                    <option value='b2'>B2</option>
                    <option value='c3'>C3</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">Please select a Station.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="priority">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    as="select"
                    name="priority"
                    defaultValue={this.state.priority}
                    onChange={this.handleChange}
                    required>
                    <option value=''>Select Priority...</option>
                    <option value='1'>Critical</option>
                    <option value='2'>High</option>
                    <option value='3'>Medium</option>
                    <option value='4'>Low</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">Please select a Priority.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    rows="5"
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please enter a description.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="image">
                  <Form.Label>Image Upload</Form.Label>
                  <Form.File
                    name="image"
                    label="File"
                    accept=".jpeg, .png, .jpg"
                    onChange={this.handleImage}
                    custom
                  />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      : null
  }
}
