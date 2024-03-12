import React, { useState } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import { delete_task, done_task } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import EditTask from "../EditTask/EditTask";

const Taskitem = ({ task }) => {
  console.log(task.description);
  const dispatch = useDispatch();
  const handleDone = (id) => {
    dispatch(done_task(id));
  };
  const handleDelete = (id) => {
    dispatch(delete_task(id));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card" style={{ width: "312px" }}>
        <h5 className="card-header">Tasklist</h5>
        <div className="card-body">
          <p className="card-text">{task.description}</p>
          <MDBBtnGroup shadow="0" style={{ width: "279px" }}>
            <MDBBtn color="success" onClick={() => handleShow(task.id)}>
              Edit
            </MDBBtn>{" "}
            <br />
            <MDBBtn color="secondary" onClick={() => handleDone(task.id)}>
              {task.Done ? "Not Done" : "Done"}
            </MDBBtn>
            <MDBBtn
              className="me-1"
              color="danger"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </MDBBtn>
          </MDBBtnGroup>
        </div>
      </div>
      <EditTask show={show} handleClose={handleClose} task={task} />
    </>
  );
};

export default Taskitem;
