import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumdata = albumsData[id];
  //   console.log(albumdata);
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded " src={albumdata.image} alt="" />
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumdata.name}
          </h2>
          <h4>{albumdata.desc}</h4>
          <p className="nr-1">
            <img
              className="inline-block w-5 mr-2"
              src={assets.spotify_logo}
              alt="Spotify-Logo"
            />
            <b>Spotify </b> • 1,34,347 likes <b> • 50 songs</b>
            about 2hr 30 mins
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>
          Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block"> Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((items, index) => (
        <div
          onClick={() => {
            playWithId(items.id);
          }}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#2a1515]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={items.image} alt="" />
            {items.name}
          </p>
          <p className="text-[15px]">{albumdata.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{items.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
