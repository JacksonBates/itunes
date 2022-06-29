import React from "react";
import { AwaitingResults, SearchResults, Search } from "./components";

function App() {
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
    <>
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
    </>
  );
}

export default App;
