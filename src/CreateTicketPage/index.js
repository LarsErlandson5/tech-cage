import React from 'react'
import { Link } from 'react-router-dom'

export default class CreateTicketPage extends React.Component {
  render() {
    return (
    <div>
        <Link to="/">&lt; Home</Link>
        <h2>Create Ticket</h2>
    </div>
    )
  }
}
