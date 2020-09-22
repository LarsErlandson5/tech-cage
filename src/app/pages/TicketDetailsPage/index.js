import React from 'react'
import ViewTicket from './ViewTicket'
import EditTicket from './EditTicket'

export default class TicketDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticket: {}
    }
  }

  render() {
    return (
      <div>
        {/* TODO: use ternary operator (single-line if-statement) to decide if edit or view */}
        <ViewTicket ticket={this.state.ticket} />
        <EditTicket ticket={this.state.ticket} />
      </div>
    )
  }
}
