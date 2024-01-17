import {
  ADD_BOOK,
  REMOVE_BOOK,
  REMOVE_ALL_BOOKS,
  UPDATE_BOOK,
  SEARCH_BOOK,
  GET_BOOKS,
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

export const removeAllBooks = () => {
  return {
    type: REMOVE_ALL_BOOKS,
  };
};

export const updateBook = () => {
  return {
    type: UPDATE_BOOK,
  };
};

export const searchBook = (query) => {
  return {
    type: SEARCH_BOOK,
    query,
  };
};

export const getAllBooks = () => {
  return {
    type: GET_BOOKS,
  };
};
