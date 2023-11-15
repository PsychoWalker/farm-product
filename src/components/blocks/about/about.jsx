import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import "./style.css";
import farmer from "../../../assets/farmer-hello.png";

function About() {
    return (
        <section className="about">
            <div className="about__wrapper">
                <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
                <p className="about__text">
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </p>
            </div>
            <div className="about__wrapper">
                <img src={farmer} alt=""/>
            </div>
        </section>
    )
}

export default About;
