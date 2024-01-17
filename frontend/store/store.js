import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
import createSagaMiddleware from "redux-saga";
import bookSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(bookSaga);

export default store;
