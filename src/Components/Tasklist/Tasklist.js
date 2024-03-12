import React from "react";
import { useSelector } from "react-redux";
import Taskitem from "../Taskitem/Taskitem";

export const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {tasks.map((task) => {
        return <Taskitem task={task} key={task.id} />;
      })}
    </div>
  );
};
