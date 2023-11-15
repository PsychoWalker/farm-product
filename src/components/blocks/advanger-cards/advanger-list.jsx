import React from "react";
import Title, {TitleSize} from "../../ui/title/title";
import Button from "../../ui/button/button";
import "./style.css";
import AdvangedCard from "../../ui/card/card";

function AdvangerList({ advanger }) {
    return (
        <section className="list">
            {advanger?.length ? (
                    <>
            <Title size={TitleSize.BIG}>Почему фермерские продукты лучше?</Title>
            <ul className="list__list">
                {advanger.map((advange) => (
                    <li className="list__item" key={advange.id}>
                        <AdvangedCard {...advange} />
                    </li>
                ))}
            </ul>
            <Button minWidth={353}>Купить билет</Button>
                    </>
                ) : null}
        </section>
    );
}

export default AdvangerList;
