import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSongs,
  setCurrentAudio,
  PausePlay,
  nextSong,
  previousSong,
} from "./features/reducers/audioPlayer";

import {
  setCurrentSong,
  setCurrentTime,
  setDuration,
} from "./features/reducers/progressBar";
import { audioType } from "./utils/typeAudio";

import NextButton from "./Components/NextButton";
import PlayButton from "./Components/PlayButton";
import PreviousButton from "./Components/PreviousButton";
import AudioTitle from "./Components/AudioTitle";

function App() {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  const audioPlayer = useSelector((state: any) => state.audioPlayer);
  const progressBar = useSelector((state: any) => state.progressBar);

  let content;

  if (audioPlayer.error) {
    content = <p>{audioPlayer.error}</p>;
  } else if (audioPlayer && audioPlayer.playlist.length > 0) {
    content = (
      <ul className="w-2/3 flex flex-col gap-1">
        {audioPlayer.playlist.map((audio: audioType) => (
          <li
            key={audio.id}
            onClick={() => {
              dispatch(setCurrentAudio(audio));
            }}
            className="px-4 py-2 w-full bg-slate-200 rounded-md cursor-pointer">
            {audio.title} - {audio.artist}
          </li>
        ))}
      </ul>
    );
  }

  useEffect(() => {
    if (audioPlayer.currentAudio) {
      const audioElement = audioRef.current;
      if (audioElement) {
        if (!audioPlayer.played) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
        // audioElement.onloadedmetadata = () => {
        //   dispatch(setDuration(audioElement.duration));
        // };
        // audioElement.ontimeupdate = () => {
        //   dispatch(setCurrentTime(audioElement.currentTime));
        // };
      }
    }
  }, [audioPlayer]);

  useEffect(() => {
    const progressbar = document.getElementById("progressbar");
    const widthProgressBar = progressbar?.getBoundingClientRect().width;

    const progressPlayed = document.getElementById("progressbar-played");
    if (progressPlayed && widthProgressBar) {
      progressPlayed.style.width = `${
        (progressBar.currentTime / progressBar.duration) * widthProgressBar
      }px`;
    }

    if (progressBar.currentTime == progressBar.duration) dispatch(nextSong());
  }, [progressBar, dispatch]);

  function changeProgressOnClick() {
    const progressbar = document.getElementById("progressbar");
    const progressPlayed = document.getElementById("progressbar-played");
    const XProgressBar = progressbar?.getBoundingClientRect()
    console.log(XProgressBar)
    if (progressPlayed && XProgressBar) {
      progressPlayed.style.width = `${
        (progressBar.currentTime / progressBar.duration) * XProgressBar.left
      }px`;
    }
  }

  function getFormattedTimes(value: number) {
    const minutes: number = Math.floor(value / 60);
    const seconds: number = Math.floor(value % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div className="w-screen h-screen bg-slate-800 flex flex-col">
      <div className="container w-5/6 h-full flex flex-col items-center py-4 space-y-2">
        <h1 className="text-white ">Lorem ipsum dolor sit amet.</h1>
        {audioPlayer && content}
      </div>
      <div className="mt-auto w-full mx-auto flex flex-col gap-1 p-8 bg-purple-200">
        <div className="container mb-3 w-5/6 mx-auto">
          <AudioTitle audioPlayer={audioPlayer} />
          <div className="flex w-full justify-center items-center space-x-2 mb-2">
            <PreviousButton prevAudio={() => dispatch(previousSong())} />
            <PlayButton
              play={audioPlayer.played}
              changePlay={() => dispatch(PausePlay())}
            />
            <NextButton
              nextAudio={() => {
                console.log("next audio");
                dispatch(nextSong());
              }}
            />
          </div>

          <audio
            onTimeUpdate={(e) =>
              dispatch(setCurrentTime(e.currentTarget.currentTime))
            }
            onLoadedData={(e) =>
              dispatch(setDuration(e.currentTarget.duration))
            }
            ref={audioRef}
            id="audioPlay"
            controls
            className="hidden"
            src={audioPlayer.currentAudio?.url}></audio>
          <div
            onClick={changeProgressOnClick}
            id="progressbar"
            className="w-full h-[4px] bg-black rounded-full relative cursor-pointer">
            <div
              id="progressbar-played"
              className="w-0 h-full absolute bg-cyan-600 rounded-full"></div>
            <span className="absolute top-1">
              {getFormattedTimes(progressBar.currentTime)}
            </span>
            <span className="absolute top-1 right-0">
              {getFormattedTimes(progressBar.duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
