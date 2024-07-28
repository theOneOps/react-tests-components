import { audioType, audioReducerType } from "../utils/typeAudio";


interface AudioTitleProps {
    audioPlayer: audioReducerType;
  }

export default function AudioTitle({audioPlayer}:AudioTitleProps) {
const { playlist, currentAudio } = audioPlayer;
  return (
    <>
      <h3>{currentAudio?.title}</h3>
      <div className="w-full flex justify-between">
        <span>{currentAudio?.artist}</span>
        <span>
          {playlist?.findIndex(
            (el: audioType) => el.id == currentAudio?.id
          ) + 1}
          /{playlist?.length}
        </span>
      </div>
    </>
  );
}
