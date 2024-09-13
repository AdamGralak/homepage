import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
`;
