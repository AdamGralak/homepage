import styled from "styled-components";

export const StyledAboutMe = styled.section`
    display: flex;
    flex-direction: row;
    width: 70%;
    background-color: white;
    margin: 20px;
    position: relative;

    & > img {
        width: 200px;
        height: 180px;
        padding: 20px;
        border-radius: 50%;
    }
`;

export const StyledDiv = styled.div`
    flex-grow: 1;
    position: relative; 
`;