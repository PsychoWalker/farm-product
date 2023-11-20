import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import farmer from "../../../assets/farmer-hello.png";
import {AboutMain, AboutText, AboutWrapper} from "./styled";

function About() {
    return (
        <AboutMain>
            <AboutWrapper>
                <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
                <AboutText>
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </AboutText>
            </AboutWrapper>
            <AboutWrapper>
                <img src={farmer} alt=""/>
            </AboutWrapper>
        </AboutMain>
    )
}

export default About;
