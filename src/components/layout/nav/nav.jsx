import React from "react";
import Btn from "../../ui/button/button";
import {AppRoute} from "../../const";
import {useLocation} from "react-router-dom";


const buttons = [
    {to: AppRoute.MAIN, button: (<Btn minWidth={200} link={AppRoute.MAIN}>Назад</Btn>)},
    {to: AppRoute.BUY, button: (<Btn minWidth={200} link={AppRoute.BUY}>Купить</Btn>)},
];
function Nav() {
    const pageUrl = useLocation().pathname;
    return (
        <nav>
            {buttons
                .filter((button) => button.to !== pageUrl)
                .map((button) => button.button)}
        </nav>
    )
}

export default Nav;
