import React from "react";
import styled, { css } from "styled-components";

function Display(props) {
  return <Label>{props.message}</Label>;
}


const Label = styled.button`
  background: transparent;
  border-radius: 3px;
  margin-left: 0.5rem;
  width: 5em;
  height: inherit;
  border: 2px solid #7f187f;
  color: #523006;
`;

export default Display;
