import styled from "styled-components";
import { Section } from "../../../styled/";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const AboutMain = styled(Section)`
    display: flex;
    position: relative;
    padding-left: ${(props) => props.theme.pagePadding};
    padding-top: 37px;
    padding-bottom: 0;
    margin-bottom: 90px;
    padding-right: 60px;
    background-color: ${(props) => props.theme.colorForSecondBackground};
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    box-sizing: border-box;   
`;

export const AboutWrapper = styled.div `
    position: relative;
    z-index: 3;
`

export const AboutText = styled(Paragraph) `
    color: #333;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-top: 24px;
`
