import React from "react";
import { StyledTile, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectRepos } from "../core/repositoriesSlice";

export const Repositories = () => {
    const repos = useSelector(selectRepos);
    
    return (
        <Wrapper>
            {repos && repos.length > 0 ? (
                repos.map((repo) => (
                    <StyledTile key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description || "No description available"}</p>
                        <h4>
                            Code: <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Link</a>
                        </h4>
                        <h4>
                            Demo: <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Link</a>
                        </h4>
                    </StyledTile>
                ))
            ) : (
                <p>No repositories available.</p>
            )}
        </Wrapper>
    );
};
