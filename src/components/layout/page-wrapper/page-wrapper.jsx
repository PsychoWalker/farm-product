import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main/main-page";
import Footer from "../footer/footer";
import {PageWrapperStyle} from "./styled";
import BuyPage from "../../pages/buy/buy-page";

function PageWrapper({ ...prop }) {
    return (
        <>
            <Header />
            <PageWrapperStyle>
                {/*<MainPage {...prop}/>*/}
                <BuyPage/>
            </PageWrapperStyle>
            <Footer />
        </>
    )
}

export default PageWrapper;
