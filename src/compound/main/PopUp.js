import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Calculator from './Calculator';
import { FaCalculator } from 'react-icons/fa';
import '../css/popup.css'

function PopUp() {
  const [show, setShow] = useState(false);

  return (
    <>
     <Button className='popup-button my-3' onClick={() => setShow(true)}>
     <FaCalculator/>  Calculator
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            CALCULATOR
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Calculator/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;