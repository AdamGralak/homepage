import { createSlice } from "@reduxjs/toolkit";

const personalHomepage = createSlice({
    name: "personalHomepage",
    initialState: {
        status: "initial",
        repositories: null,
        darkMode: false,
    },
    reducers: {
        switchDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        fetchRepos: (state) => {
            state.status = "loading";
            state.repositories = null;
        },
        fetchReposError: (state) => {
            state.status = "error";
            state.repositories = null;
        },        
        fetchReposSuccess: (state, { payload }) => {
            state.status = "success";
            state.repositories = payload;
        },
    }
});

export const {
    switchDarkMode,
    fetchRepos,
    fetchReposError,
    fetchReposSuccess,
} = personalHomepage.actions;

export const selectReposState = state => state.personalHomepage;
export const selectRepos = state => selectReposState(state).repositories;
export const selectStatus = state => selectReposState(state).status;
export const selectDarkMode = state => selectReposState(state).darkMode;

export default personalHomepage.reducer;
