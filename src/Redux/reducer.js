import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (oldState = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case GET_TODO_SUCCESS:
      return {
        ...oldState,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    case GET_TODO_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};
