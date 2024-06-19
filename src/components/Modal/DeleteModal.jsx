import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { deleteConcentrationByTime } from "../../services/concentration";
import { notify } from "../../services/toastify";

const DeleteModal = ({ show, handleClose }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const handleDeleteDataByTime = async () => {
    let timeNow = false;
    handleClose(false);
    if (max === "now") timeNow = true;
    const timestamp = {
      min: min,
      max: timeNow ? new Date(Date.now()) : max,
    };
    console.log("timestamp:", timestamp);
    const response = await deleteConcentrationByTime(timestamp);
    notify(response, "success");
  };
  return (
    <Modal show={show} onHide={() => handleClose(false)} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Min time</Form.Label>
            <Form.Control
              type="text"
              placeholder="min time"
              autoFocus
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Max time</Form.Label>
            <Form.Control
              type="text"
              placeholder="max time"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleDeleteDataByTime()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
