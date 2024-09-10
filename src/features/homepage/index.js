import React from "react";
import { Container } from "../../common/Container";
import { Section } from "../../common/Section";
import { List } from "./List";
import skills from "./skills";
import nextToLearn from "./nextToLearn";
import { AboutMe } from "./AboutMe";
import { Repositories } from "./Repositories";

export const Homepage = () => {
    return(
    <>
        <Container>
            <AboutMe />
            <Section title={"My skills:"} body={<List list={skills} />} />
            <Section title={"What I want to learn next?"} body={<List list={nextToLearn} />} />
            <Section body={<Repositories />} />
        </Container>
    </>
)};

