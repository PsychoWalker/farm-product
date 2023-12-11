import React from "react";
import Header from "../header/header";
/*import MainPage from "../../pages/main/main-page";*/
import Footer from "../footer/footer";
import {PageWrapperStyle} from "./styled";
import BuyPage from "../../pages/buy/buy-page";
import { Outlet } from "react-router-dom";

function PageWrapper({ ...prop }) {
    return (
        <>
            <Header />
            <PageWrapperStyle>
                <Outlet />
                {/*<MainPage {...prop}/>*/}
                {/*<BuyPage {...prop}/>*/}
            </PageWrapperStyle>
            <Footer />
        </>
    )
}

export default PageWrapper;
