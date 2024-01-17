import { combineReducers } from "@reduxjs/toolkit";
import { allBooksData, bookData } from "./reducers";

export default combineReducers({ allBooksData, bookData });
