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
                    👨🏻‍💻 I'm a third-year Automation and Robot Control student at Lodz University of Technology with 
                    a strong passion for programming and problem-solving. Currently exploring the world of computer networks through the CCNA course, I'm building a path toward a career in cybersecurity. I'm developing my skills in Python, Kali Linux, and other security tools, 
                    and I'm looking to grow through collaboration with forward-thinking companies that value learning and development.
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