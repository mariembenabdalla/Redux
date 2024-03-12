import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  UPDATE_TASK,
} from "../constants/actionType";

const initialstate = {
  tasks: [
    {
      description: "test",
      Done: false,
      id: Math.random(),
    },
  ],
};

export const TaskReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random(), done: false, description: payload },
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          task.id === payload ? { ...task, Done: !task.Done } : task
        ),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id
            ? { ...task, description: payload.description }
            : task
        ),
      };
    default:
      return state;
  }
};
