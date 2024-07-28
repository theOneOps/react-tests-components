import { createSlice } from "@reduxjs/toolkit"
import { audioReducerType } from "../../utils/typeAudio"

const initialState: audioReducerType = {
    playlist:[],
    currentAudio:{},
    played:true,
    error:'',
}


export const audioPlayer = createSlice({
    name:'audioPlayer',
    initialState,
    reducers:{
        setData:(state, action)=>{
            state.playlist = action.payload.playlist;
            state.currentAudio = action.payload.playlist[0]
            if (state.currentAudio)
                state.played = true
        },
        setCurrentAudio:(state, action) => {
            state.currentAudio = {...action.payload}
            if (state.currentAudio)
                state.played = true
        },

        PausePlay:(state, action)=>
        {
            state.played = !state.played
        },
        nextSong:(state, action)=>{
            const index = state.playlist.findIndex(el => el.id === state.currentAudio.id) + 1
            if (index === state.playlist.length)
                state.currentAudio = {...state.playlist[0]}
            else
                state.currentAudio = {...state.playlist[index]}
        },
        previousSong:(state, action)=>{
            const index = state.playlist.findIndex(el => el.id === state.currentAudio.id)
            if (index === 0)
                state.currentAudio = {...state.playlist[state.playlist.length-1]}
            else
                state.currentAudio = {...state.playlist[index-1]}
        }
    }
})


export function getSongs(action?)
{
    return function(dispatch, getState)
    {
        fetch('../data/playlist.json')
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            dispatch(setData(data))
        })
    }
}

export const {setData, setCurrentAudio, PausePlay, nextSong, previousSong} = audioPlayer.actions
export default audioPlayer.reducer