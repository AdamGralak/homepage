import React from "react";
import { StyledList } from "./styled";

export const List = ({list}) =>(
        <StyledList>
            {list.map( (element) =>(
                <li key={element.id}>
                    {element.content}
                </li>
            ))}
        </StyledList>
    );