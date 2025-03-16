import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Fix the import
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  // console.log(location);
  const isalbum = location.pathname.includes("album");
  // console.log(isalbum);

  const albumid = isalbum ? location.pathname.slice(-1) : "";
  // console.log(albumid);
  const bgColor = albumsData[Number(albumid)].bgColor;
  // console.log(bgColor);

  useEffect(() => {
    if (isalbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
