import { TasksTypes } from './types';
import initialState from '../initialState';

const INITIAL_STATE = initialState.tasks;

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksTypes.ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default taskReducer;
