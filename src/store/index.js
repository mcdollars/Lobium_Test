import { createStore } from 'redux'
import * as CONSTANTS from './constants'
const INITIAL_STATE = {
  data: [
    {
      title: "Get up early",
      description: "Get up early in the morning",
      done: false,
    },
    {
      title: "Have breakfast",
      description: "Have a breakfast with my family",
      done: false,
    },
    {
      title: "Learn about react",
      description: "learning about the most popular javascript framework",
      done: false,
    },
  ],
}

function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONSTANTS.ADD_TASK:
      return {
        ...state,
        data: [
          {
            title: action.payload.title,
            description: action.payload.description,
            done: false,
          },
          ...state.data,
        ],
      };

    case CONSTANTS.REMOVE_TASK:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload.index),
          ...state.data.slice(action.payload.index + 1),
        ],
      }

    case CONSTANTS.CHECK_TASK:
      const index = action.payload.index;
      const item = state.data[index];
      item.done = !item.done;
      if (item.done) {
        const newData = [
          ...state.data.slice(0, index),
          ...state.data.slice(index + 1),
          item,
        ];
        return {
          ...state,
          data: newData,
        };
      } else {
        const newData = [
          item,
          ...state.data.slice(0, index),
          ...state.data.slice(index + 1),
        ];
        return {
          ...state,
          data: newData,
        };
      }
    default:
      return state;
  }
}

const store = createStore(tasks)

export default store
