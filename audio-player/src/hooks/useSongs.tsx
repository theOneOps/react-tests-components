import { useState, useEffect } from "react";
import { songsType } from "../utils/typeAudio";


export const useSongs = () => {
  const [allSongs, setAllSongs] = useState<songsType>({songs:{playlist:[]}, error: "" });

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await fetch("data/playlist.json");
        if (!response.ok) throw new Error("error in finding resources !");
        const data = await response.json();
        //console.log(data.playlist);
        setAllSongs({songs:{playlist:data.playlist}, error:""})
      } catch (error) {
        if (error instanceof Error)
            setAllSongs({ songs:{playlist:[]}, error: error.message });
      }
    };
    getSongs();
  },[]);
  return { playlist:allSongs.songs.playlist, error: allSongs.error };
};
