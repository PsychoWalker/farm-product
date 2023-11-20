import React from "react";
import Logo from "../../ui/logo/logo";
import {FooterStyle, Text} from "./styled";

function Footer() {
    return (
        <FooterStyle>
            <Logo />
            <Text>Создано в 2023</Text>
        </FooterStyle>
    )
}

export default Footer;
