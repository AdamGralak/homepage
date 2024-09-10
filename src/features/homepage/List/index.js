import React from "react";

export const List = ({list}) =>(
        <ul>
            {list.map( (element) =>(
                <li key={element.id}>
                    {element.content}
                </li>
            ))}
        </ul>
    );