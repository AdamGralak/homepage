import styled, { keyframes } from "styled-components";
import { ReactComponent as spinner } from "./spinner.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;

    &>p {
        color: ${({ theme }) => theme.colors.textContent};
        padding: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    &>p {
        font-size: 12px;
    }

    }
`;

export const Spinner = styled(spinner)`
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.blue};
    height: 100px;
    width: 100px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        height: 80px;
        width: 80px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.phone}){
        height: 40px;
        width: 40px;
    }
`;