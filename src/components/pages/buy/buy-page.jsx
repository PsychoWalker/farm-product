import React, {useState} from "react";
import BuyBlock from "../../ui/buy-block/buy-block";
import CheckMeat from "../../ui/check/check";
import BuyCard from "../../layout/buy-card/buy-card";
import { BuyBlockRight, BuySection, SliderBlock, StyledSlider } from "./styled";
import Btn from "../../ui/button/button";
import {InputAddressStyled} from "../../ui/input/styled";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
function BuyPage({ products }) {
    const [swiperRef, setSwiperRef] = useState(null);
    const [selectProductIds, setSelectProductIds] = useState([]);

    const selectProducts = selectProductIds.map((id) =>
        products.find((product) => product.id === id)
    );

    const handleOnClickProduct = (value, index) => {
        if (!selectProductIds.includes(value)) {
            swiperRef.slideTo(index, 200);
        }
    };

    SwiperCore.use([Mousewheel, Pagination, Scrollbar]);
    return (
        <BuySection>
            <div className="buyBlock__left">
                <BuyBlock widthEl={353} heightEl={355}>
                    <span>Выберите продукты</span>
                    {products.map((product) => (
                        <CheckMeat key={product.id} children={product.title} count={product.id} selectValues={selectProductIds}
                                   onChange={setSelectProductIds}
                                   onClickLabel={handleOnClickProduct}/>
                    ))}
                </BuyBlock>
                <BuyBlock widthEl={353} heightEl={215}>
                    <span>Сделать заказ</span>
                    <InputAddressStyled />
                    {/*<PriceLabel>Цена</PriceLabel>
                    <PriceValue>{fullPrice}</PriceValue>*/}
                    <Btn minWidth={314}>Купить</Btn>
                </BuyBlock>
            </div>
            <BuyBlockRight>
                <StyledSlider onSwiper={setSwiperRef}
                              spaceBetween={12}
                              direction="vertical"
                              slidesPerView="auto"
                              scrollbar={{ draggable: true }}
                              mousewheel
                              pagination={{
                                  type: "fanction"
                              }}
                              >
                    {products.map((product) => (
                        <SliderBlock key={product.id}>
                            <BuyBlock widthEl={727} heightEl={288}>
                                <BuyCard product={product}/>
                            </BuyBlock>
                        </SliderBlock>
                    ))}
                </StyledSlider>
            </BuyBlockRight>
        </BuySection>
    )
}

export default BuyPage;
