import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { deleteConcentrationByTime } from "../../services/concentration";
import { notify } from "../../services/toastify";

const DeleteModal = ({ show, handleClose }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const handleDeleteDataByTime = async () => {
    let timeNow = false;
    handleClose(false);
    if (end === "now") timeNow = true;
    const timestamp = {
      start: start,
      end: timeNow ? new Date(Date.now()) : end,
    };
    const response = await deleteConcentrationByTime(timestamp);
    notify(response, "success");
  };
  return (
    <Modal show={show} onHide={() => handleClose(false)} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete by timestamp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>start time</Form.Label>
            <Form.Control
              type="text"
              placeholder="start time"
              autoFocus
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>end time</Form.Label>
            <Form.Control
              type="text"
              placeholder="end time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
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
