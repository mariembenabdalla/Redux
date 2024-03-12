import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_task } from "../../Redux/Actions/actions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const handelechange = (e) => {
    setDescription(e.target.value);
  };
  const dispatch = useDispatch();
  const handlAdd = () => {
    dispatch(add_task(description));
  };
  return (
    <div>
      <div style={{ width: "800px", marginLeft: "98px", marginTop: "30px" }}>
        <MDBInput
          label="New Task"
          id="form1"
          type="text"
          onChange={handelechange}
        />
      </div>
      <div style={{ marginLeft: "581px", marginTop: "-35px" }}>
        <MDBBtn color="secondary" onClick={handlAdd}>
          AddTask
        </MDBBtn>
      </div>
    </div>
  );
};

export default AddTask;
