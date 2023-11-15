import React from "react";
import Title, {TitleSize} from "../title/title";
import "./style.css";

function AdvangedCard({
    farmer,
    head,
    header,
    about,
    image
                      }) {

    return (
        <article className={`card ${farmer}`}>
            <div className="card__block">
                <figure className="card__figure">
                    <img
                        src={image}
                        className="card__image"
                        width={52}
                        height={52}
                        alt="изображение тарелки"
                        />
                </figure>
                <div className="card__description">
                    <span className={`card__place ${farmer}`}>{head}</span>
                    <Title size={TitleSize.SMALL}>{header}</Title>
                </div>
            </div>
            <p className="card__text" dangerouslySetInnerHTML={{ __html: about}}/>
        </article>
    );
}

export default AdvangedCard;
