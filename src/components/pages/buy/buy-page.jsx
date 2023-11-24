import React from "react";

function BuyPage() {
    return (<>
        <div className="buyBlock">
            <div className="buyBlock__left">
                <BuyBlock>
                    <span>Выберите продукты</span>
                    <CheckMeat />
                </BuyBlock>
                <BuyBlock>

                </BuyBlock>
            </div>
            <div className="buyBlock__right">
                <BuyCard />
            </div>
        </div>
    </>)
}

export default BuyPage;
