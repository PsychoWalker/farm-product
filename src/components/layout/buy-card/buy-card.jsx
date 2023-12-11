import React from "react";
import {BuyCardStyle, HeaderCart} from "./styled";
import BlockTab from "../../ui/block-tab/block-tab";

function BuyCard(products) {
    const tabs = [
        { title: "Описание", desc: products.product.description},
        { title: "Характеристики", desc: [
                ['Масса: ', products.product.characteristic.weight[1]],
                ['Срок годности: ', products.product.characteristic.term],
                ["Порода: ", products.product.characteristic.pride],
                ["Место происхождения: ", products.product.characteristic.locate]
            ]},
        { title: "Свойства", desc: [
                ['Энергетическая ценность: ', products.product.properties.energy],
                ['Пищевая ценность: ', products.product.properties.food],
            ]}
    ];

    return <BuyCardStyle>
        <img src={products.product.src} alt={products.product.title} />
        <div>
            <HeaderCart>{products.product.title}</HeaderCart>
            <BlockTab tabs={tabs} tabIndex={0}/>
            <p><span>{products.product.price}руб.</span> / <span>{products.product.characteristic.weight[0]} гр.</span></p>
        </div>
    </BuyCardStyle>
}

export default BuyCard;
