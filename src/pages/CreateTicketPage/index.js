import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import './index.css'
import qr_code from '../../images/qr_code.png'

export default class CreateTicketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.props.history.push('/');
    }

   this.setState({
     validated: true
   });
  };

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
            <Col style={{ margin: 'auto' }}>
              <h4>Create Ticket</h4>
            </Col>
            <Col xs={4}>
              <Button variant="outline-secondary" id="qr_code">
                <img src={qr_code} alt={qr_code} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Form.Group controlId="formLine">
                  <Form.Label>Line</Form.Label>
                  <Form.Control as="select" required>
                    <option value=''>Select Line...</option>
                    <option>Range</option>
                    <option>Refrigeration</option>
                    <option>Ventilation</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">Please select a Line.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formStation">
                  <Form.Label>Station</Form.Label>
                  <Form.Control as="select" required>
                    <option value='' >Select Station...</option>
                    <option>A1</option>
                    <option>B2</option>
                    <option>C3</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">Please select a Station.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPriority">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control as="select" required>
                    <option value=''>Select Priority...</option>
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
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
