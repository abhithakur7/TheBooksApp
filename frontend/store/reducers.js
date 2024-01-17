import {
  ADD_BOOK,
  REMOVE_BOOK,
  REMOVE_ALL_BOOKS,
  UPDATE_BOOK,
  SEARCH_BOOK,
  SET_BOOK_LIST,
  SET_BOOK_DATA,
} from "./constants";

export const allBooksData = (data = [], action) => {
  switch (action.type) {
    case SET_BOOK_LIST:
      return [...action.data];
    case ADD_BOOK:
      console.log(data, action, "working");
      return [action.data, ...data];
    case REMOVE_BOOK:
      return data;
    case REMOVE_ALL_BOOKS:
      data = [];
      return [...data];
    case UPDATE_BOOK:
      return data;
    case SEARCH_BOOK:
      return data;
    default:
      return data;
  }
};

export const bookData = (data = {}, action) => {
  switch (action.type) {
    case SET_BOOK_DATA:
      console.log("dataaaa", data);
      return data;
    default:
      return data;
  }
};
