import React from "react";
import Title, {TitleSize} from "../title/title";
import "./style.css";

function AdvangedCard() {
    return (
        <article className="card">
            <div className="card__block">
                <figure className="card__figure">
                    <img
                        src=""
                        className="card__image"
                        width={52}
                        height={52}
                        alt="изображение тарелки"
                        />
                </figure>
                <div className="card__description">
                    <span className="card__icon">Фермерские продукты</span>
                    <Title size={TitleSize.SMALL}>Еда намного вкуснее</Title>
                </div>
            </div>
            <p className="card__text">
                Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники
            </p>
        </article>
    );
}

export default AdvangedCard;
