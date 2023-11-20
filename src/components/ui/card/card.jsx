import React from "react";
import Title, {TitleSize} from "../title/title";
import {Cards, CardBlock, CardDescription, CardFigure, CardPlace} from "./styled";

export const FarmerColor =  {
    FARMER: "farmer",
    MAGAZINE: "magazine",
    DEFAULT: ""
};

function AdvangedCard({
    farmer,
    head,
    header,
    about,
    image
                      }) {

    return (
        <Cards $bgColor={farmer}>
            <CardBlock>
                <CardFigure>
                    <img
                        src={image}
                        className="card__image"
                        width={52}
                        height={52}
                        alt="изображение тарелки"
                        />
                </CardFigure>
                <CardDescription>
                    <CardPlace $color={farmer}>{head}</CardPlace>
                    <Title size={TitleSize.SMALL}>{header}</Title>
                </CardDescription>
            </CardBlock>
            <p className="card__text" dangerouslySetInnerHTML={{ __html: about}}/>
        </Cards>
    );
}

export default AdvangedCard;
