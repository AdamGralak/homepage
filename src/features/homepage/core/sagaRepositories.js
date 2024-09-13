import { call, delay, put, takeLatest } from "redux-saga/effects"
import { fetchRepos, fetchReposError, fetchReposSuccess } from "./repositoriesSlice";
import { getRepositories } from "./getRepositories";

function* fetchReposHandler({ payload: username }) {
    try {
        yield delay(2000); //added to show loading
        const repos = yield call(getRepositories, username);
        yield put(fetchReposSuccess(repos));
    } catch (error) {
        yield put(fetchReposError());
        yield call(alert, "Something went wrong :(")
    }
};

export function* reposSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler)
};