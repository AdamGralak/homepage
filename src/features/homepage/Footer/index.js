import React from "react";
import { email } from "../Data";
import { Caption, Contact, Content, FacebookLink, GithubLink, InstagramLink, Link, LinkedINLink, Links, Mail } from "./styled";

export const Footer = () => (
  <Contact>
    <Caption>Let's talk</Caption>
    <Content>
      <Mail href={`mailto:${email}`}>
        {email}
      </Mail>
      <p>
        I’m always open to new projects whenever I have the time.
        If you have a website, dashboard or mobile app in mind
        and need some help to make your ideas come to life, feel free to contact me.
        We will make it together. 😊
      </p>
    </Content>
    <Links>
      <Link href="https://github.com/AdamGralak" target="_blank" rel="noopener noreferrer">
        <GithubLink />
      </Link>
      <Link href="https://www.linkedin.com/in/adam-gralak-8b6926321/" target="_blank" rel="noopener noreferrer">
        <LinkedINLink />
      </Link>
      <Link href="https://www.facebook.com/adam.gralak.90/" target="_blank" rel="noopener noreferrer">
        <FacebookLink />
      </Link>
      <Link href="https://www.instagram.com/tensam.st/" target="_blank" rel="noopener noreferrer">
        <InstagramLink />
      </Link>
    </Links>
  </Contact>
);