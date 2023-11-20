import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import {HeaderStyle} from "./styled";

function Header() {
    return (
        <HeaderStyle>
            <Logo />
            <Nav />
        </HeaderStyle>
    )
}

export default Header;
