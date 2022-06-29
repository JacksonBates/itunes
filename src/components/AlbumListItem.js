import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AlbumListItemCard = styled.div`
  background-color: #ddd;
  border-radius: 5px;
  display: flex;
  flex: 1 1;
  margin: 5px;
  max-width: 500px;
  min-width: 320px;
`;

const ArtistName = styled.span`
  font-size: 1em;
  font-weight: bold;
`;

const ReleaseDate = styled.span`
  font-size: 0.8em;
`;

const AlbumName = styled.span`
  font-size: 1em;
  font-style: italic;
  font-weight: normal;
`;

const Artwork = styled.img`
  padding: 5px;
  place-self: center;
`;

const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export default function AlbumListItem({ data }) {
  const releaseDate = new Date(data.releaseDate);

  return (
    <AlbumListItemCard>
      <Artwork
        src={data.artworkUrl60}
        alt={`${data.collectionName} album artwork`}
      />
      <AlbumDetails>
        <ArtistName>{data.artistName}</ArtistName>
        <AlbumName>{data.collectionName}</AlbumName>
        <ReleaseDate>{releaseDate.getFullYear()}</ReleaseDate>
        <Link to={`/album/${data.collectionId}`}>View album</Link>
      </AlbumDetails>
    </AlbumListItemCard>
  );
}
