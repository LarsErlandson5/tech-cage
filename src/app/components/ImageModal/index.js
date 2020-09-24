import React from 'react'
import {
  Image,
  Modal
} from 'react-bootstrap'

export default class ImageModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Modal
        {...this.props}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.ticket.station}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.ticket.image} thumbnail />
        </Modal.Body>
      </Modal>
    )
  }
}