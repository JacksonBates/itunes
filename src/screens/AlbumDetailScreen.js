import React from "react";
import { Link, useParams } from "react-router-dom";
import { AlbumCard, TrackList } from "../components";

export default function AlbumDetailScreen() {
  const { id } = useParams();
  const [albumDetails, setAlbumDetails] = React.useState(null);
  const [trackDetails, setTrackDetails] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
      .then((response) => response.json())
      .then((data) => {
        const album = data.results.find(
          (item) => item.wrapperType === "collection"
        );
        const tracks = data.results.filter(
          (item) => item.wrapperType === "track"
        );
        setAlbumDetails(album);
        setTrackDetails(tracks);
      });
  }, [id]);

  return (
    <>
      <Link to="/">return to search page</Link>
      {albumDetails && (
        <main>
          <AlbumCard album={albumDetails} />
          <TrackList tracks={trackDetails} />
        </main>
      )}
    </>
  );
}
