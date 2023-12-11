import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
`;
export const StyledLogo = styled(Link)`
  ${logoStyle};
  text-decoration: none;
`;
export const StyledLogoMainPage = styled.span`
  ${logoStyle}
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

