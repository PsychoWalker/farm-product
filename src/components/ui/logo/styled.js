import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  height: 44px;
  align-items: center;
  text-decoration: none;
`;

export const Text = styled.span`
    color: ${(props) => props.theme.colorBlackForText};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 115%;
    padding-left: 24px;
    `;
