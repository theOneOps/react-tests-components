import {createSlice} from '@reduxjs/toolkit'
import { progressBarType } from '../../utils/typeAudio'

const initialState:progressBarType = 
{
    duration:0.,
    currentTime:0.,
    currentSong:{},
}


export const progressBar = createSlice({
    name:'progressBar',
    initialState,
    reducers:
    {
        setCurrentSong:(state, action) =>{
            state.currentSong = action.payload
        },

        setCurrentTime:(state, action) => {
            state.currentTime = action.payload
        },

        setDuration:(state, action) => {
            state.duration = action.payload
        },
    }
})


export const {setCurrentSong, setCurrentTime, setDuration} = progressBar.actions
export default progressBar.reducer

