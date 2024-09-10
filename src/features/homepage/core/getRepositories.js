import axios from "axios"

const gitHubAPIBaseURL = "https://api.github.com";

export const getRepositories = username =>
    axios.get(`${gitHubAPIBaseURL}/users/${username}/repos`)
        .then(response => response.data);