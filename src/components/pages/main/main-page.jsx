import React from "react";
import About from "../../blocks/about/about";
import AdvangerList from "../../blocks/advanger-cards/advanger-list";

function MainPage({ advanger }) {
    return (
        <>
            <About />
            <AdvangerList advanger={advanger}/>
        </>
    )
}

export default MainPage;
