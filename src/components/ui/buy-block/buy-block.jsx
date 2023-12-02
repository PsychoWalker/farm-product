import React from "react";
import {BlockCard} from "./styled";
function BuyBlock({widthEl, heightEl, children}) {
    return (
        <BlockCard
            $widthEl={widthEl}
            $heightEl={heightEl}>
            {children}
        </BlockCard>
    )
}

export default BuyBlock;