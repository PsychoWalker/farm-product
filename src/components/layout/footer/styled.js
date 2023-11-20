import styled from "styled-components";

export const FooterStyle = styled.footer `
    width: ${(props) => props.theme.pageWidth};
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    height: 80px;
    background-color: ${(props) => props.theme.colorForLightBackground};
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-left: 90px;
    padding-right: 90px;
    box-sizing: border-box;
`;

export const Text = styled.span `
    min-height: 43px;
    min-width: 148px;
    max-width: 700px;
    padding: 8px 12px;
    font-size: ${(props) => props.theme.fontSizeDefault};
    background-color: #fff6d9;
    border-radius: 5px;
    vertical-align: middle;
    text-align: center;
    box-sizing: border-box;
`
