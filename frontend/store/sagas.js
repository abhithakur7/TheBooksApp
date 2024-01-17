import { takeEvery, put } from "redux-saga/effects";
import { GET_BOOKS, SET_BOOK_LIST, ADD_BOOK } from "./constants";
import axios from "axios";

function* getBooks() {
  let response = yield axios.get(import.meta.env.VITE_BASE_URL);
  response = yield response.data;
  yield put({ type: SET_BOOK_LIST, response });
}

function* addBook({ data }) {
  console.log(data, "Data");
  yield axios.post(`http://localhost:8082/api`, data);
}

function* bookSaga() {
  yield takeEvery(GET_BOOKS, getBooks);
  yield takeEvery(ADD_BOOK, addBook);
}

export default bookSaga;
