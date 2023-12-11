import styled from "styled-components";

export const BlockCard = styled.div `
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.04);
  width: ${(props) => `${props.$widthEl}px` || "100%"};
  height: ${(props) => `${props.$heightEl}px` || "100%"};
  padding: 20px;
  margin-bottom: 18px;
  
  & span {
    color: #333;
    text-align: center;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
`
