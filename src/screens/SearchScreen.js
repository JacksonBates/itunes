import React from "react";
import styled from "styled-components";
import { AwaitingResults, SearchResults, Search } from "../components";

const Header = styled.div`
  background-color: #ddd;
  margin: 0;
  text-align: center;
  padding: 20px;
  width: 100%;
`;

export default function SearchScreen() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        searchTerm
      )}&entity=album`
    ).then((response) => response.json());
    setSearchResults(data.results);
    setSearchTerm("");
  };

  const handleClear = () => {
    setSearchResults([]);
    setSearchTerm("");
  };

  return (
    <React.Fragment>
      <a href="https://github.com/JacksonBates/itunes">Link to repo</a>
      <Header>iTunes Album Search</Header>
      <Search
        handleSearchSubmit={handleSearchSubmit}
        handleClear={handleClear}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      {searchResults.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : (
        <AwaitingResults />
      )}
    </React.Fragment>
  );
}
