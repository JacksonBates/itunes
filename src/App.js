import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlbumDetailScreen, SearchScreen } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/album/:id" element={<AlbumDetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
