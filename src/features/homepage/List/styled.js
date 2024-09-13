import styled from "styled-components";

export const StyledList = styled.ul`
column-count: 2;
column-gap: 20px;
color: ${({ theme }) => theme.colors.textContent};
background-color: ${({ theme }) => theme.colors.objectBackground};
transition: background-color 0.3s ease, color 0.3s ease;

&>li::marker{
    color: ${({ theme }) => theme.colors.blue};
}

@media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
      font-size: 14px;
      column-count: 1;
    }
`;