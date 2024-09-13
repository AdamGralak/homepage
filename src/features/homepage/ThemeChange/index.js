import React from "react";
import { MoonIcon, StyledButton, SunIcon, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, switchDarkMode } from "../core/repositoriesSlice";

export const ThemeChangeButton = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectDarkMode);
    const handleThemeToggle = () => {
        dispatch(switchDarkMode());
    };

    return (
        <>
            <Wrapper>
                <StyledButton onClick={handleThemeToggle} isdarkmode={isDarkMode ? "true" : "false"}>
                    <p>Dark mode: {isDarkMode ? "on" : "off"}</p>
                    <MoonIcon isdarkmode={isDarkMode ? "true" : "false"}>🌙</MoonIcon>
                    <SunIcon isdarkmode={isDarkMode ? "true" : "false"}>☀️</SunIcon>
                </StyledButton>
            </Wrapper>
        </>
    );
};