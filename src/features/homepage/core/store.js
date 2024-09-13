import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import personalHomepageReducer from "../core/repositoriesSlice";
import rootSaga from "../core/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
