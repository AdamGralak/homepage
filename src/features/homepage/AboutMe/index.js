import React from "react";
import myImage from "./fish-1755473_1280-588x420.jpg"
import { StyledAboutMe, StyledDiv } from "./styled";
import { ThemeChangeButton } from "../ThemeChange";

export const AboutMe = () => {

    return (
        <>
            <StyledAboutMe>
                <img src={myImage} alt="Adam Gralak"></img>
                <StyledDiv>
                    <h2>
                        Adam Gralak
                    </h2>
                    <p>
                        lorem ipsum
                    </p>
                    <button>
                        Hire
                    </button>
                    <ThemeChangeButton/>
                </StyledDiv>
            </StyledAboutMe>
        </>
    )
};