import { all } from "redux-saga/effects";
import { reposSaga } from "./sagaRepositories";

export default function* rootSaga() {
    yield all([
        reposSaga(),
    ]);
};