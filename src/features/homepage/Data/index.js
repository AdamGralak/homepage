import { nanoid } from "@reduxjs/toolkit";

export const username = "AdamGralak";

export const email = "g.adam02@wp.pl";

export const learnNow = [
    { id: nanoid(), content: "Python" },
    { id: nanoid(), content: "Kali Linux"},
    { id: nanoid(), content: "SQL"},
    { id: nanoid(), content: "CCNA"},
];

export const nextToLearn = [
    { id: nanoid(), content: "Pentesting" },
    { id: nanoid(), content: "DevSecOps"},
];

export const skills = [
    { id: nanoid(), content: "React.js" },
    { id: nanoid(), content: "JavaScript ES6+" },
    { id: nanoid(), content: "HTML + CSS" },
    { id: nanoid(), content: "C/C++ Basic Level" },
    { id: nanoid(), content: "Git" },
];