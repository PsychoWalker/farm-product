import React from "react";
import {StyledLogo, StyledLogoMainPage, Text} from "./styled";
import { ReactComponent as LogoImage } from "../../../assets/farmer.svg";
import {AppRoute} from "../../const";
import {useLocation} from "react-router-dom";

function Logo() {
    const { pathname } = useLocation();
    return pathname === AppRoute.MAIN ? (
        <StyledLogoMainPage>
            <LogoImage />
            <Text>Фермерские продукты</Text>
        </StyledLogoMainPage>
        ) : (
        <StyledLogo to={AppRoute.MAIN}>
            <LogoImage />
            <Text>Фермерские продукты</Text>
        </StyledLogo>
    )


}

export default Logo;
