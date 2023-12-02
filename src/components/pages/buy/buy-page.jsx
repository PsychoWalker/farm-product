import React from "react";
import BuyBlock from "../../ui/buy-block/buy-block";
import CheckMeat from "../../ui/check/check";
import BuyCard from "../../layout/buy-card/buy-card";
import {BuySection} from "./styled";
import Btn from "../../ui/button/button";
import {InputAddressStyled} from "../../ui/input/styled";

function BuyPage({ buyList }) {
    return (
        <BuySection>
            <div className="buyBlock__left">
                <BuyBlock widthEl={353} heightEl={355}>
                    <span>Выберите продукты</span>
                    {buyList.map((listName) => (
                        <CheckMeat children={listName.title} count={listName.id}/>
                    ))}
                    <CheckMeat>Филе бедра цыпленка</CheckMeat>
                </BuyBlock>
                <BuyBlock widthEl={353} heightEl={315}>
                    <span>Сделать заказ</span>
                    <InputAddressStyled />
                    <Btn minWidth={314}>Купить</Btn>
                </BuyBlock>
            </div>
            <div className="buyBlock__right">
                {buyList.map((listName) => (
                <BuyBlock widthEl={727} heightEl={288}>
                        <BuyCard children={listName}/>
                </BuyBlock>
                ))}
            </div>
        </BuySection>
    )
}

export default BuyPage;
