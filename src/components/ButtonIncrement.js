import React from "react";
import styled, { css } from "styled-components";

function ButtonIncrement(props) {
  return <Button onClick={props.onClickFunc}>+1</Button>;
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  margin-left: 0.5rem;
  width: 5em;
  height: inherit;
  border: 2px solid #7f187f;
  color: #523006;
  &:hover {
    cursor: pointer;
    background: #efefef;
  }
  &:active {
    cursor: pointer;
    background: transparent;
  }
`;

export default ButtonIncrement;
