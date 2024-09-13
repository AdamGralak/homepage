import styled from "styled-components";
import { ReactComponent as Symbol } from '../Footer/githubLogo.svg';

export const StyledTile = styled.div`
  background-color: ${({ theme }) => theme.colors.objectBackground};
  width: 45%;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  transition: transform 0.4s, box-shadow 0.4s, background-color 0.3s ease, color 0.3s ease,;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
  }

  & > h3 {
    text-align: center;
    font-weight: 600;
    font-style: italic;
    color: ${({ theme }) => theme.colors.blue};
  }

  &>h4 {
    font-weight: 400;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text};
  }

  &> p {
    color: ${({ theme }) => theme.colors.textContent};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    width: 80%;
    }

    
  @media(max-width: ${({ theme }) => theme.breakpoints.phone}){
    width: 100%;

    &>p {
      font-size: 10px;
    }

    &>h3 {
      font-size: 14px;
    }

    &>h4 {
      font-size: 12px;
    }
    }
`;

export const Wrapper = styled.div`
  width: 70%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;

  & h4 a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    font-weight: 400;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    justify-content: center;
  };
  
`;

export const GithubSymbol = styled(Symbol)`
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.blue};

    @media(max-width: 676px){
        height: 32px;
    }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;

  &>h2 {
    margin: 0;
  }

  &>p {
    margin: 0;
  }
`;
