import { call, delay, put, takeLatest } from "redux-saga/effects"
import { fetchRepos, fetchReposError, fetchReposSucces } from "./repositoriesSlice";
import { getRepositories } from "./getRepositories";

function* fetchReposHandler({ payload: username }) {
    try {
        yield delay(1000);
        console.log("nana");
        const repos = yield call(getRepositories, username);
        yield put(fetchReposSucces(repos));
    } catch (error) {
        yield put(fetchReposError());
        yield call(alert, "Something went wrong :(")
    }
};

export function* reposSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler)
};