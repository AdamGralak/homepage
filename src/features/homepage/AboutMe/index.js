import React from "react";
import myImage from "./photo.jpg"
import { ButtonLink, Envelope, StyledAboutMe, StyledDiv } from "./styled";
import { ThemeChangeButton } from "../ThemeChange";
import { email } from "../Data";

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
                    👨🏻‍💻 I'm a Junior Frontend Developer into React, 
                    currently looking for new job opportunities
                    </p>
                    <ButtonLink href={`mailto:${email}`}>
                       <Envelope/>  Hire Me!
                    </ButtonLink>
                </StyledDiv>
                <ThemeChangeButton />
            </StyledAboutMe>
        </>
    )
};