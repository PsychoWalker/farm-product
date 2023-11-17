import styled from "styled-components";

export const StyledButton = styled.a`
    display: flex;
    max-width: 700px;
    font-size: ${(props) => props.theme.fontSizeDefault};
    min-width: ${(props) => `${props.$minWidth}px` || "100%"};
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorForButton};
    height: 60px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border:none;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
    
    &:hover,
    &:active {
        background-color: ${(props) => props.theme.colorForButtonHover};
        box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
    }
    
    &:active {
        box-shadow: none;
    }
`;
