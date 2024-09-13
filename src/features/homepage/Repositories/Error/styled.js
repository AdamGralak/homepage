import styled from "styled-components";
import { ReactComponent as warning } from "./warning.svg";

export const Wrapper = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.textContent};
    transition: color 0.3s;
    padding: 20px;
    margin-bottom: 40px;

    &>h3 {
      color: ${({ theme }) => theme.colors.text};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    &>p {
        font-size: 12px;
      }

    &>h3 {
        font-size: 14px;
    }
    }
`;

export const Warning = styled(warning)`
        margin: 0 auto;
        width: 40px;
        height: 40px;
`;