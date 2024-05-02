import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value:true,
}

const preview = createSlice({
    name:"preview",
    initialState,
    reducers:{
        changePreview:(state, action)=>{
            state.value = action.payload;
        },
        showPreview:(state, action)=>{
            state.value = false;
        }
    }
})

export const {changePreview, showPreview} = preview.actions;
export default preview.reducer;