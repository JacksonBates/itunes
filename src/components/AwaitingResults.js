import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  height: 50vh;
  padding: 20px;
  place-items: center;
`;

export default function AwaitingResults() {
  return <Wrapper>Please search for something to view the results.</Wrapper>;
}
