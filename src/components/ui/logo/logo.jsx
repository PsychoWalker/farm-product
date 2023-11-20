import React from "react";
import { StyledLogo, Text } from "./styled";
import { ReactComponent as LogoImage } from "../../../assets/farmer.svg";

function Logo() {
    return (
        <StyledLogo href="/">
            <LogoImage />
            <Text>Фермерские продукты</Text>
        </StyledLogo>
    )
}

export default Logo;
