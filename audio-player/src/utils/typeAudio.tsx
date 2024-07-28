export type audioType = {
    title?:string,
    artist?:string,
    url?:string,
    id?:string
}

export  type playlistType = {
    playlist:audioType[]
}

export type songsType = {
    songs: playlistType,
    error: string;
  };

export type audioReducerType = playlistType & {
    error:string,
    currentAudio:audioType,
    played:boolean,
}

export type progressBarType = {
    duration:number,
    currentTime:number,
    currentSong:audioType,
}