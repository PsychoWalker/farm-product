import React, {useState} from "react";
import {BlockDescription, BlockTabStyle, TabsLink} from "./styled";

function BlockTab(info) {
    const [activeTab, setActiveTab] = useState(info.tabIndex);

    const tabItems = info.tabs.map((item, index) => {
        if (activeTab === index) {
            return (
                <>
                    <TabsLink active key={index}>{item.title}</TabsLink>
                </>
            )
        }
        return (
            <TabsLink href="#" key={index} onClick={() => {
                setActiveTab(index)
            }}>{item.title}</TabsLink>
        )
    });
    const tabDesc = info.tabs.map((item, index) => {
        if (activeTab === index) {
            if (Array.isArray(item.desc)) {
                item.desc.map((paragraph, index) => {
                    console.log(paragraph)
                    return (
                        <>
                            <p key={index}>111</p>
                        </>
                    )
                })
            }
            return <p>{item.desc}</p>
        }
    });

    return (<>
        <BlockTabStyle>
            {tabItems}
        </BlockTabStyle>
        <BlockDescription>
            {tabDesc}
        </BlockDescription>
    </>)
}

export default BlockTab;
