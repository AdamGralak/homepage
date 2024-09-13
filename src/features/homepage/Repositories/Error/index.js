import React from "react";
import { Warning, Wrapper } from "./styled";
import { ButtonLink } from "../../AboutMe/styled";

export const Error = () => (
    <>
        <Wrapper>
            <Warning />
            <h3>Ooops! Something went wrong…</h3>
            <p>
                Sorry, failed to load Github projects.<br />
                You can check them directly on Github.
            </p>
            <ButtonLink href="https://github.com/AdamGralak?tab=repositories" target="_blank" rel="noopener noreferrer">
                Go to Github
            </ButtonLink>
        </Wrapper>
    </>
);