import styled, { css } from "styled-components";
import { ReactComponent as github } from "./githubLogo.svg";
import { ReactComponent as facebook } from "./facebookLogo.svg";
import { ReactComponent as linkedIN } from "./linkedINLogo.svg";
import { ReactComponent as instagram } from "./instagramLogo.svg";

export const Caption = styled.p`
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    font-size: 10px;
    }
`;

export const Content = styled.div`
  padding-top: 10px;
  width: 70%;

  & > p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    width: 80%;
    
    &>p{
    font-size: 10px;
    }
  }
`;

export const Mail = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;

  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    font-size: 14px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.phone}){
    font-size: 12px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  display: inline-block;
`;

const linkStyle = css`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.icons};
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
  width: 26px;
  height: 26px;
  }
`;

export const GithubLink = styled(github)`
  ${linkStyle};
`;

export const InstagramLink = styled(instagram)`
  ${linkStyle};
`;

export const LinkedINLink = styled(linkedIN)`
  ${linkStyle};
`;
export const FacebookLink = styled(facebook)`
  ${linkStyle};
`;

export const Contact = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: ${({ theme }) => theme.colors.objectBackground};
  box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  width: 70%;
  margin-bottom: 40px;
`;