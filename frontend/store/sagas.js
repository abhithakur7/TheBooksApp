import { takeEvery, put } from "redux-saga/effects";
import {
  GET_BOOKS,
  SET_BOOK_LIST,
  ADD_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOK,
  GET_BOOK_DETAILS,
  SET_BOOK_DATA,
} from "./constants";
import axios from "axios";
import { toast } from "react-toastify";

function* getBooks() {
  let response = yield axios.get(import.meta.env.VITE_BASE_URL);
  response = yield response.data;
  yield put({ type: SET_BOOK_LIST, response });
}

function* addBook({ data }) {
  let formData = new FormData();
  formData.append(
    "data",
    JSON.stringify({
      title: data.title,
      author: data.author,
      description: data.description,
    })
  );
  formData.append("cover", data.image);
  let result = yield axios.post(`${import.meta.env.VITE_BASE_URL}`, formData);

  if (result.status === 200) {
    toast.success("Book Added Successfully", {
      toastId: "added",
    });
    yield put({ type: SET_BOOK_DATA, result });
  } else {
    toast.error("Something went wrong", {
      toastId: "error",
    });
  }
}

function* removeBook({ id }) {
  let response = yield axios.delete(`${import.meta.env.VITE_BASE_URL}/${id}`);
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
  let formData = new FormData();
  formData.append(
    "data",
    JSON.stringify({
      title: data.title,
      author: data.author,
      description: data.description,
    })
  );
  formData.append("cover", data.image);
  let result = yield axios.put(
    `${import.meta.env.VITE_BASE_URL}/${id}`,
    formData
  );
  if (result.status === 200) {
    toast.success("Book Updated Successfully", {
      toastId: "added",
    });
    window.location.href = "/";
  } else {
    toast.error("Something went wrong", {
      toastId: "error",
    });
  }
}

function* getBookDetails({ id }) {
  let response = yield axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`);
  response = yield response.data;
  yield put({ type: SET_BOOK_DATA, response });
}

function* bookSaga() {
  yield takeEvery(GET_BOOKS, getBooks);
  yield takeEvery(ADD_BOOK, addBook);
  yield takeEvery(REMOVE_BOOK, removeBook);
  yield takeEvery(UPDATE_BOOK, updateBook);
  yield takeEvery(GET_BOOK_DETAILS, getBookDetails);
}

export default bookSaga;
