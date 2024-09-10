import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
position: absolute;
top: 10px;
right: 10px; 

`;

export const StyledButton = styled.button`
  border: none;
  outline-offset: 2px;
  background-color: inherit;
  border-radius: 10px;
  width: 130px;
  height: 24px;
  display: flex;
  flex: 1fr 1fr;
  justify-content: left;
  align-items: center;
  transition: background-color 1s ease-in-out;
  
  &>p {
    margin: 4px;
    font-size: 10px;
    transform: translateX(6px);
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

export const SunIcon = styled.span`
  position: absolute;
  font-size: 8px;
  right: 10px;
  padding: 4px;
  background-color: ${({ isdarkmode }) => (isdarkmode === "false" ? "#fff" : "#000")}; 
  border-radius: 50%;
  transition: opacity 0.8s ease-in-out, transform 1s ease-in-out, background-color 1s ease-in-out;
  opacity: ${({ isdarkmode }) => (isdarkmode === "true" ? "0" : "1")};
  transform: ${({ isdarkmode }) => (isdarkmode === "true" ? "translateX(10px)" : "translateX(-10px)")};
`;

export const MoonIcon = styled.span`
  position: absolute;
  font-size: 8px;
  right: 10px;
  padding: 4px;
  background-color: ${({ isdarkmode }) => (isdarkmode === "true" ? "#333" : "transparent")}; 
  border-radius: 50%;
  transition: opacity 0.8s ease-in-out, transform 1s ease-in-out, background-color 1s ease-in-out;
  opacity: ${({ isdarkmode }) => (isdarkmode === "true" ? "1" : "0")};
  transform: ${({ isdarkmode }) => (isdarkmode === "true" ? "translateX(10px)" : "translateX(-10px)")};
`;
