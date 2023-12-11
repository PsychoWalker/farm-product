import React from "react";
import {StyledButton} from "./styled";

function Btn({ children, minWidth, link, className, onClick, ...props }) {
    return (
        <StyledButton
            $minWidth={minWidth}
            {...(link ? {to: link} : { as: "button", onClick, type: "button"})}
            className={className}>
            {children}
        </StyledButton>
    )
}

export default Btn;
