import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

export default class EditTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      station: props.station,
      line: props.line,
      description: props.description,
      priority: props.priority
    }
  }

  updateTicket = async () => {
    /* TODO: axios.[PUT|POST] to update ticket
     * include update to 'lastUpdatedDate'
     * once updated, go to /TicketDetails page for updated ticket
     */
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {/* TODO: Cancel Edit Button, and go back to /TicketDetails */}
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Edit Ticket</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* TODO: Create edit ticket form using boostrap form components */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
