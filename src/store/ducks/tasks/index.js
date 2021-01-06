import { TasksTypes } from "./types";
import initialState from "../initialState";

const INITIAL_STATE = initialState.tasks;

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksTypes.ADD:
      return [...state, action.payload];
    case TasksTypes.DELETE:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
