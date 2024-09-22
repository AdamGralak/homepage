import React from "react";
import { Container } from "../../common/Container";
import { Section } from "../../common/Section";
import { List } from "./List";
import { learnNow, skills } from "./Data/index";
import { nextToLearn } from "./Data/index";
import { AboutMe } from "./AboutMe";
import { Repositories } from "./Repositories";
import { Footer } from "./Footer";

export const Homepage = () => {
    return (
        <>
            <Container>
                <AboutMe />
                <Section title={"My skills:"} body={<List list={skills} />} />
                <Section title={"What am I learning now"} body={<List list={learnNow} />} />
                <Section title={"What I plan to learn next"} body={<List list={nextToLearn} />} />
                <Repositories />
                <Footer />
            </Container>
        </>
    )
};

