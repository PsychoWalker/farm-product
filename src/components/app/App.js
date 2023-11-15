import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import advangerList from "../../mocks/advangerList";

export default function App() {
  return <PageWrapper advanger={advangerList} />;
}
