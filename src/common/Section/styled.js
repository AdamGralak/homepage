import styled from "styled-components";

export const StyledSection = styled.section`
  width: 70%;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.colors.objectBackground};
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  border-radius: 6px;
  box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
`;

export const StyledSectionHeader = styled.header`
  position: relative;
  padding: 14px;
  padding-bottom: 0px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
`;
