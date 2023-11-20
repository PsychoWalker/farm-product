import styled from "styled-components";
import {Section, Ul, Li} from "../../../styled";

export const List = styled(Section) `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
`;

export const ListList = styled(Ul) `
     margin-top: 44px;
  margin-bottom: 44px;
  list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 64px;
`

export const ListItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
