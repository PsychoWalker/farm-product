import React from "react";
import Logo from "../../ui/logo/logo";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <Logo />
            <span className="footer__text">Создано в 2023</span>
        </footer>
    )
}

export default Footer;
