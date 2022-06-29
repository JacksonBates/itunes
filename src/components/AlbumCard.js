import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #ddd;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Artwork = styled.img`
  place-self: center;
  padding: 10px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const ArtistName = styled.h1`
  margin: 5px 0;
`;
const AlbumTitle = styled.p`
  margin: 0;
  font-style: italic;
`;
const Copyright = styled.p`
  margin: 0;
`;
export default function AlbumCard({ album }) {
  return (
    <Card>
      <Artwork
        src={album?.artworkUrl100}
        alt={`${album?.collectionName} album cover`}
      />
      <Details>
        <Main>
          <ArtistName>{album?.artistName}</ArtistName>
          <AlbumTitle>{album?.collectionName}</AlbumTitle>
        </Main>
        <Copyright>{album?.copyright}</Copyright>
      </Details>
    </Card>
  );
}
