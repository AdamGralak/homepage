import styled from "styled-components";

export const StyledTile = styled.div`
  background-color: white;
  width: 45%;
  padding-left: 20px;
  padding-right: 20px;

  & > h3 {
    padding: 10px;
  }
`;

export const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
`;
