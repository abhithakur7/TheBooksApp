import { takeEvery, put } from "redux-saga/effects";
import {
  GET_BOOKS,
  SET_BOOK_LIST,
  ADD_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOK,
} from "./constants";
import axios from "axios";
import { toast } from "react-toastify";

function* getBooks() {
  let response = yield axios.get(import.meta.env.VITE_BASE_URL);
  response = yield response.data;
  yield put({ type: SET_BOOK_LIST, response });
}

function* addBook({ data }) {
  let result = yield axios.post(`http://localhost:8082/api`, data);
  console.log(result);
  if (result.status === 200) {
    toast.success("Book Added Successfully", {
      toastId: "added",
    });
  } else {
    toast.error("Something went wrong", {
      toastId: "error",
    });
  }
}

function* removeBook({ id }) {
  let response = yield axios.delete(`http://localhost:8082/api/${id}`);
  if (response.status === 200) {
    yield put({ type: GET_BOOKS });
    toast.success("Book Deleted Successfully", {
      toastId: "delete",
    });
  } else {
    toast.error("Something went wrong", {
      toastId: "error",
    });
  }
}

function* updateBook({ id, data }) {
  let result = yield axios.put(`http://localhost:8082/api/${id}`, data);
  if (result.status === 200) {
    toast.success("Book Updated Successfully", {
      toastId: "added",
    });
  } else {
    toast.error("Something went wrong", {
      toastId: "error",
    });
  }
}

function* bookSaga() {
  yield takeEvery(GET_BOOKS, getBooks);
  yield takeEvery(ADD_BOOK, addBook);
  yield takeEvery(REMOVE_BOOK, removeBook);
  yield takeEvery(UPDATE_BOOK, updateBook);
}

export default bookSaga;
