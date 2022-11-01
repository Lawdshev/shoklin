import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLaundryContext } from '../contexts/laundryContexts';

function Message() {
  const {show,handleClose,message,variant} = useLaundryContext();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant=''>
        </Modal.Header>
        <Modal.Body style={{color: variant}} className='text-[{variant}] text-center text-xl'>{message}</Modal.Body>
        <Modal.Footer >
          <Button variant="outline-none" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Message;