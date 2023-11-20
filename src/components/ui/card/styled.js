import styled from "styled-components";
import { FarmerColor} from "./card";

export const Cards = styled.article`
  display: flex;
    width: 540px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    min-height: 197px;
    background: ${(props) => {
    let bgColor = "#E1EDCE";

    if (props.$bgColor === FarmerColor.MAGAZINE) {
        bgColor = "#ff7b7b";
    }

    return bgColor;
}};
`;

export const CardBlock = styled.div`
  display: flex;
`;

export const CardFigure = styled.figure`
    width: 52px;
    display: block;
    margin: 0 20px 0 0;
`;

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Text = styled.span `
   width: 100%;
   margin: 0; 
`;

export const CardPlace = styled.span`
    display: flex;
    padding: 2px 10px;
    align-items: flex-start;
    gap: 10px;
    background: ${(props) => {
        let bgColor = "#0cb700";
        
        if (props.$color === FarmerColor.MAGAZINE) {
            bgColor = "#ff0000";
        }
        
        return bgColor;
}};
    color: #ffffff;
`
/*

.card__place.farmer {
    background-color: #0cb700;
}

.card__place.magazine {
    background-color: #ff0000;
}

.card.magazine {
    background-color: #ff7b7b;
}
*/
