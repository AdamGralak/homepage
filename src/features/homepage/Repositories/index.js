import React from "react";
import { GithubSymbol, Header, StyledTile, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectRepos, selectStatus } from "../core/repositoriesSlice";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Repositories = () => {
    const repos = useSelector(selectRepos);
    const status = useSelector(selectStatus);

    const renderContent = () => {
        switch (status) {
            case 'loading':
                return <Loading />;
            case 'error':
                return <Error />;
            case 'success':
                return (
                    <Wrapper>
                        {repos && repos.length > 0 ? (
                            repos.map((repo) => (
                                <StyledTile key={repo.id}>
                                    <h3>{repo.name}</h3>
                                    <p>{repo.description || "No description available"}</p>
                                    <h4>
                                        Code: <a href={repo.html_url} target="_blank" rel="noopener noreferrer">https://link.code.com</a>
                                    </h4>
                                    {!!repo.homepage && (
                                        <h4>
                                            Demo: <a href={repo.homepage} target="_blank" rel="noopener noreferrer">https://link.demo.com</a>
                                        </h4>
                                    )}
                                </StyledTile>
                            ))
                        ) : (
                            <p>No repositories available.</p>
                        )}
                    </Wrapper>
                );
            default:
                return null;
        }
    };

    return (
        <section>
            <Header>
                <GithubSymbol />
                <h2>Portfolio</h2>
                <p>My recent projects</p>
            </Header>
            {renderContent()}
        </section>
    );
};
