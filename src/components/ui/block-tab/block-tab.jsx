import React, {useState} from "react";
import {BlockDescription, BlockTabStyle} from "./styled";

function BlockTab(description) {
    const tabsItem = [
        { title: "Описание", desc: description.children.children.description}
        { title: "Характеристики", desc: [
                ['Масса:', description.children.children.characteristic.weight[1]],
                ['Срок годности:', description.children.children.characteristic.term],
                ["Порода:", description.children.children.characteristic.pride],
                ["Место происхождения:", description.children.children.characteristic.locate]
            ]},
        { title: "Характеристики", desc: [
                ['Энергетическая ценность:', description.children.children.properties.energy],
                ['Пищевая ценность:', description.children.children.properties.food],
            ]}
    ];

    const [active, setTabList] = useState(0);
    const openTab = e => setTabList(+e.target.dataset.index);

    const TabContent = ({title, content}) => {
        <BlockDescription>
            <p>{content}</p>
        </BlockDescription>
    }

    return (
        <>
            <BlockTabStyle>
                {tabsItem.map((n,  i) => (
                    <a className = {`tablink ${i === active ? 'active' : ''}`}
                    onClick={openTab}
                    adta-index={i}
                    >
                        {n}
                    </a>
                    ))}
            </BlockTabStyle>
        </>
    )
}

export default BlockTab;
