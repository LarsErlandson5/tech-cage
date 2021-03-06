import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Ticket extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  onClick = (event) => {
    this.setState({ selectedName: event }, () => {
      this.props.history.push({
        pathname: '/TicketDetails',
        search: `?id=${event}`,
        state: { id: event }
      });
    });
  }

  render() {
    return (
      this.props.tickets.map((ticket) =>
        <tr key={ticket._id.toString()} onClick={this.onClick.bind(this, ticket._id)}>
          <td>{ticket.station}</td>
          <td>{ticket.priority}</td>
          <td>{ticket.status}</td>
          <td>{new Date(ticket.lastUpdatedDate).toLocaleString()}</td>
        </tr>
      )
    )
  }
}

export default withRouter(Ticket)
