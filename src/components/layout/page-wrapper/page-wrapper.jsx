import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main/main-page";
import Footer from "../footer/footer";
import {PageWrapperStyle} from "./styled";

function PageWrapper({ ...prop }) {
    return (
        <>
            <Header />
            <PageWrapperStyle>
                <MainPage {...prop}/>
            </PageWrapperStyle>
            <Footer />
        </>
    )
}

export default PageWrapper;
