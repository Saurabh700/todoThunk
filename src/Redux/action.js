import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionTypes";
// import { useDispatch } from "react-redux";
import axios from "axios";

// const dispatch = useDispatch();

const handleGet = (dispatch) => {
  dispatch(reqTodo());
  axios
    .get("http://localhost:8080/todos")
    .then((res) => dispatch(getTodo(res.data)))
    .catch((err) => dispatch(failedTodo()));
};

const handleAdd = (title) => {
  return axios.post("http://localhost:8080/todos", {
    title: title,
    status: false,
  });
};

const toggleStatus = (id, payload) => {
  return axios.patch(`http://localhost:8080/todos/${id}`, {
    status: payload,
  });
};

const getTodo = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: payload,
  };
};

const reqTodo = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

const failedTodo = () => {
  return {
    type: GET_TODO_FAILURE,
  };
};

export { failedTodo, reqTodo, getTodo, handleGet, handleAdd, toggleStatus };
