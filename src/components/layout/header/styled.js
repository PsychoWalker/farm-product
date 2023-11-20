import styled from "styled-components";

export const HeaderStyle = styled.header `
    display: flex;
    padding: 0 90px;
    width: ${(props) => props.theme.pageWidth};
    position: relative;
    margin: 0 auto;
    height: 80px;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colorForLightBackground};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
    align-items: center;
    z-index: 5;
    box-sizing: border-box;
`
