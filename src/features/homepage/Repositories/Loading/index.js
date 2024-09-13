import React from "react";
import { Spinner, Wrapper } from "./styled";

export const Loading = () => (
    <Wrapper>
        <p>Please wait, projects are being loaded…</p>
        <Spinner />
    </Wrapper>
);