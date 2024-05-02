import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}


const tabIndex = createSlice({
    name:"tabIndex",
    initialState,
    reducers:{
        changeIndex:(state, action)=>{
            state.value = action.payload;
            //console.log(action)
        }
    }
})

export const {changeIndex} = tabIndex.actions;
export default tabIndex.reducer;