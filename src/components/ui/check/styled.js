import styled from "styled-components";

export const Label = styled.label.attrs((props) => ({

})) `
  display: flex;
  padding: 15px 20px 0 0;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '${(props) => (!props.checked ? "✓" : " ")}';
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;    
    background: ${(props) => (!props.checked ? "#FC9B27" : "#FFFFFF")};
    top: 17px;
    right: 0;
    outline: 1px solid rgba(0,0,0,.1);
  }
`;

export const Input = styled.input.attrs((props) => ({
    type: 'checkbox',
})) `
  display: none;
`;
