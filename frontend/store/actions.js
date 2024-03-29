import {
  ADD_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOK,
  GET_BOOKS,
  SET_BOOK_DATA,
  GET_BOOK_DETAILS,
} from "./constants";

export const addBook = (data) => {
  return {
    type: ADD_BOOK,
    data,
  };
};

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    id,
  };
};

export const updateBook = ({ id, data }) => {
  return {
    type: UPDATE_BOOK,
    id,
    data,
  };
};

export const getAllBooks = () => {
  return {
    type: GET_BOOKS,
  };
};

export const getBookDetails = (id) => {
  return {
    type: GET_BOOK_DETAILS,
    id,
  };
};

export const setBookData = (data) => {
  return {
    type: SET_BOOK_DATA,
    data,
  };
};
