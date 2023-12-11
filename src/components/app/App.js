import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import {GlobalStyle} from "./styles";
import products from "../../mocks/buyList";
import { AppRoute } from "../const";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import advangerList from "../../mocks/advangerList";
import BuyPage from "../pages/buy/buy-page";
import MainPage from "../pages/main/main-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
      <>
        <GlobalStyle />
          <Router>
              <ScrollToTop />
              <Routes>
                  <Route path={AppRoute.MAIN} element={<PageWrapper />}>
                      <Route index element={<MainPage advanger={advangerList} />} />
                      <Route
                          path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
                          element={<BuyPage products={products} />}
                      />
                  </Route>
              </Routes>
          </Router>
      </>
  )
}
