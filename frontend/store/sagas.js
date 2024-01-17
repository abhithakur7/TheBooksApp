import { takeEvery, put } from "redux-saga/effects";
import { GET_BOOKS, SET_BOOK_LIST, ADD_BOOK } from "./constants";
import axios from "axios";

function* getBooks() {
  let data = yield axios.get(import.meta.env.VITE_BASE_URL);
  data = yield data.json();
  yield put({ type: SET_BOOK_LIST, data });
}

function* addBook({ data }) {
  console.log(data, "Data");
  let result = yield axios.post(`http://localhost:8082/api`, data);
}

function* bookSaga() {
  yield takeEvery(GET_BOOKS, getBooks);
  yield takeEvery(ADD_BOOK, addBook);
}

export default bookSaga;
