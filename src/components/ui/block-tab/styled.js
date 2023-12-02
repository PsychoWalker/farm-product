import styled from "styled-components";

export const BlockTabStyle = styled.div `
    display: flex;
    gap: 8px;
    
    & a {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        text-decoration: none;
        padding: 8px 12px;
        outline: 1px solid rgba(0, 0, 0, 0.10);
        background: #F6F6F6;
        cursor: pointer;
        color: ${(props) => props.theme.colorBlackForText}
    }
`

export const BlockDescription = styled.div `
    display: none;
    
    & p {
        font-size: 14px;
        line-height: 120%;
    }
    
    &.active {
        display: block;
    }
`
