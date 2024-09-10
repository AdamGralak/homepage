import { createSlice } from "@reduxjs/toolkit";

const personalHomepage = createSlice({
    name: "personalHomepage",
    initialState: {
        status: "initial",
        repositories: null,
    },
    reducers: {
        fetchRepos: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchReposError: () => ({
            status: "error",
            repositories: null,
        }),
        fetchReposSucces: (state, { payload }) => {
            state.status = "success";
            state.repositories = payload;
        },
    }
});
export const {
    fetchRepos,
    fetchReposError,
    fetchReposSucces
} = personalHomepage.actions;

export const selectReposState = state => state.repositories;
export const selectRepos = state => selectReposState(state).repositories;

export default personalHomepage.reducer;
