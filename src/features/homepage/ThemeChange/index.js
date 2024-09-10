import React, { useState } from "react";
import { MoonIcon, StyledButton, SunIcon, Wrapper } from "./styled";

export const ThemeChangeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    };

    return (
        <>
            <Wrapper>
                <StyledButton onClick={handleThemeToggle} isdarkmode={isDarkMode ? "true" : "false"}>
                <p>Switch dark mode</p>   
                <MoonIcon isdarkmode={isDarkMode ? "true" : "false"}>🌙</MoonIcon>
                <SunIcon isdarkmode={isDarkMode ? "true" : "false"}>☀️</SunIcon>
                </StyledButton>
            </Wrapper>
        </>
    );
};