import React from "react";
import Title, {TitleSize} from "../../ui/title/title";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";


function AdvangerList() {
    return (
        <section className="star-list">
            <Title size={TitleSize.BIG}>Почему фермерские продукты лучше?</Title>
            <ul className="star-list__list">
                <li className="star-list__item">
                    <Card />
                </li>
            </ul>
            <Button minWidth={353}>Купить билет</Button>
        </section>
    );
}

export default AdvangerList;
