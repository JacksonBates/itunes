import React from "react";
import styled from "styled-components";

const List = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 20px auto 0;
  max-width: 500px;
`;
const Track = styled.li`
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;
const TrackNumber = styled.span`
  font-family: system-ui, sans-serif;
  font-weight: bold;
`;
const TrackName = styled.span`
  flex-grow: 2;
  align-self: flex-start;
`;

const TrackDuration = styled.span`
  font-family: system-ui, sans-serif;
  white-space: nowrap;
`;

export default function TrackList({ tracks }) {
  const humanReadableDuration = (ms) => {
    const time = new Date(ms);
    let durationString = "";
    if (time.getUTCHours() > 0) durationString += time.getUTCHours() + " h ";
    if (time.getUTCMinutes() > 0) durationString += time.getUTCMinutes() + "m ";
    durationString += time.getUTCSeconds() + "s";
    return durationString;
  };

  return (
    <List>
      {tracks.map((track, index) => (
        <Track key={index}>
          <TrackNumber>
            {track.discCount > 1
              ? `${track.discNumber}-${track.trackNumber}`
              : track.trackNumber}
          </TrackNumber>
          <TrackName>{track.trackName}</TrackName>
          <TrackDuration>
            {humanReadableDuration(track.trackTimeMillis)}
          </TrackDuration>
        </Track>
      ))}
    </List>
  );
}
