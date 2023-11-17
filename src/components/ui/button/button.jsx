import React from "react";
import {StyledButton} from "./styled";

function Btn({ children, minWidth, link, className }) {
    return (
        <StyledButton
            $minWidth={minWidth}
            {...(link ? {href: link} : { as: "button", type: "button"})}
            className={className}>
            {children}
        </StyledButton>
    )
}

export default Btn;
