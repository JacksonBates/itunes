import React from "react";
import styled from "styled-components";
import { AlbumListItem } from ".";

const ResultsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export default function SearchResults({ results }) {
  return (
    <ResultsContainer>
      {results.map((album, index) => (
        <AlbumListItem key={index} data={album} />
      ))}
    </ResultsContainer>
  );
}
