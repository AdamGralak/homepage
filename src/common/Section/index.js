import React from "react";
import { StyledSection, StyledSectionHeader } from "./styled";

export const Section = ({title, body}) =>(
 <StyledSection>
    {title && (
      <StyledSectionHeader>
        {title}
      </StyledSectionHeader>
    )}
    {body}
  </StyledSection>
    );