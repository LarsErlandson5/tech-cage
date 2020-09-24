import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class QRModal extends React.Component {
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
          <Modal.Title>Scan QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>See if I can get the QR Code reader to appear in a modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
