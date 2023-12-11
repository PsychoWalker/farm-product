import styled from "styled-components";

export const BlockTabStyle = styled.div `
    display: flex;
    gap: 8px;
`

export const TabsLink = styled.div `
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none;
    padding: 8px 12px;
    outline: 1px solid rgba(0, 0, 0, 0.10);
    background: ${(props) => props.active ? "#88AA4D" : "#F6F6F6"};
    cursor: pointer;
    color: ${(props) => props.active ? "#fff" : props.theme.colorBlackForText};
`

export const BlockDescription = styled.div `
    
    & p {
        font-size: 14px;
        line-height: 120%;
    }
    
    &.active {
        display: block;
    }
`
