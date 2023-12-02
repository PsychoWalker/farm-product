import React from "react";
import {BuyCardStyle, HeaderCart} from "./styled";
import BlockTab from "../../ui/block-tab/block-tab";

function BuyCard(listName) {
    return <BuyCardStyle>
        <img src={listName.children.src} alt={listName.children.title} />
        <div>
            <HeaderCart>{listName.children.title}</HeaderCart>
            <BlockTab children={listName}/>
            <p><span>{listName.children.price}руб.</span> / <span>{listName.children.characteristic.weight[0]} гр.</span></p>
        </div>
    </BuyCardStyle>
}

export default BuyCard;
