import React from "react";
import Title, {TitleSize} from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvangedCard from "../../ui/card/card";
import {List, ListItem, ListList} from "./styled";
import {AppRoute} from "../../const";

function AdvangerList({ advanger }) {
    return (
        <List>
            {advanger?.length ? (
                    <>
            <Title size={TitleSize.BIG}>Почему фермерские продукты лучше?</Title>
            <ListList $isGridList>
                {advanger.map((advange) => (
                    <ListItem key={advange.id}>
                        <AdvangedCard {...advange} />
                    </ListItem>
                ))}
            </ListList>
            <Button minWidth={353} link={AppRoute.BUY}>Купить билет</Button>
                    </>
                ) : null}
        </List>
    );
}

export default AdvangerList;
