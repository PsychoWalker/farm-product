import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import advangerList from "../../mocks/advangerList";
import {GlobalStyle} from "./styles";

export default function App() {
  return (
      <>
        <GlobalStyle />;
        <PageWrapper advanger={advangerList} />;
      </>
  )
}
