import React from 'react'
import { Link } from 'react-router-dom'

export default class QueuePage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">&lt; Home</Link>
        <h2>Ticket List</h2>
      </div>
    )
  }
}
