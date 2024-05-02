import { createSlice } from "@reduxjs/toolkit";
import css from "../assets/css.png";
import js from "../assets/js.png";
import html from "../assets/html.png";


const initialState = {
  list: [
    {
      id: 0,
      src: html,
      content: `<h1>there is it, it's working !</h1>`,
      name: "html",
    },

    {
      id: 1,
      src: css,
      content: `
      h1{
        color:midnightblue;
      }`,
      name: "css",
    },

    {
      id: 2,
      src: js,
      content: `console.log("hello world);`,
      name: "js",
    },
  ],
};

const tabReducer = createSlice({
  name: "tabReducer",
  initialState,
  reducers: {
    updateCode:(state, action)=>{
      state.list[action.payload.id].content = action.payload.value
    }
  },
});

export const {updateCode} = tabReducer.actions
export default tabReducer.reducer;
