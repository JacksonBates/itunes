import React from "react";

export default function Search({
  searchTerm,
  handleClear,
  setSearchTerm,
  handleSearchSubmit,
}) {
  return (
    <form onSubmit={handleSearchSubmit} onReset={handleClear}>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
      <button type="reset">Clear</button>
    </form>
  );
}
