import { MDBInput } from "mdb-react-ui-kit";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { update_task } from "../../Redux/Actions/actions";
import { useState } from "react";

const EditTask = ({ show, handleClose, task }) => {
  const [newdescription, setNewdescription] = useState("");
  const dispatch = useDispatch();
  const handelechange = (e) => {
    setNewdescription(e.target.value);
  };
  const handleSeve = () => {
    dispatch(update_task({ id: task.id, description: newdescription }));
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBInput
            label="New Task"
            id="form1"
            type="text"
            onChange={handelechange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSeve}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
