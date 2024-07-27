import { createSlice } from "@reduxjs/toolkit";

import {useSongs} from "../useSongs";


const initialState = {
    value :songs
}

console.log(initialState.value)


export const playerReducer = createSlice(
    {
        name:"playerReducer",
        initialState,
        reducers:{
            setSongs:(state, action)=>{
                initialState.value = action.payload
            }
        }
    }
)

//export const {} = playerReducer.actions
export const {setSongs} = playerReducer.actions;
export default playerReducer.reducer;

export function getSongs(action)
{
    return function(dispatch, getState)
    {
        dispatch(useSongs().songs)
    }
}