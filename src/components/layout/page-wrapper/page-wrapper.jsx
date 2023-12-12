import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {PageWrapperStyle} from "./styled";
import { Outlet } from "react-router-dom";

function PageWrapper({ ...prop }) {
    return (
        <>
            <Header />
            <PageWrapperStyle>
                <Outlet />
            </PageWrapperStyle>
            <Footer />
        </>
    )
}

export default PageWrapper;
