import { ADD_BOOK, SET_BOOK_LIST, SET_BOOK_DATA } from "./constants";

export const allBooksData = (data = [], action) => {
  switch (action.type) {
    case SET_BOOK_LIST:
      return [...action.response];
    case ADD_BOOK:
      return [action.data, ...data];
    default:
      return data;
  }
};

export const bookData = (data = {}, action) => {
  switch (action.type) {
    case SET_BOOK_DATA:
      return { ...action.response };
    default:
      return data;
  }
};
