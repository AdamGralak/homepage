import styled from "styled-components";
import { ReactComponent as envelope } from "./envelope.svg";

export const StyledDiv = styled.div`
    flex-grow: 1;
    position: relative;
    padding-left: 20px;

    &>p {
        color: ${({ theme }) => theme.colors.textContent};
        max-width: 500px;
    }

    &>h2{
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
        font-style: italic;
    }
`;

export const ButtonLink = styled.a`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 6px;
    color: white;
    padding: 4px 14px;
    text-decoration: none;
    transition: opacity 0.5s;
    
    &:hover {
        opacity: 0.9;
    }
`;


export const StyledAboutMe = styled.section`
    display: flex;
    flex-direction: row;
    width: 70%;
    background-color: ${({ theme }) => theme.colors.objectBackground};
    margin: 20px;
    padding: 20px;
    position: relative;
    border-radius: 6px;
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    & > img {
        min-width: 160px;
        height: 160px;
        margin: 20px;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        flex-direction: column;
        align-items: center;
    
    &>img{
        margin: 0;
    }
    }

`;

export const Envelope = styled(envelope)`
width: 18px;
height: 14px;
transform: translateY(1px);
`;