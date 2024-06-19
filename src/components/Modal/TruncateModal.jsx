import { Modal, Button } from "react-bootstrap";
import { truncateConcentration } from "../../services/concentration";
import { notify } from "../../services/toastify";

const TruncateModal = ({ show, handleClose }) => {
  const handleTruncateData = async () => {
    handleClose(false)
    const response = await truncateConcentration();
    notify(response, "success");
  };
  return (
    <>
      <Modal show={show} onHide={() => handleClose(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete All Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Are you sure to delete all data!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleTruncateData()}>
            Delete all
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TruncateModal;
