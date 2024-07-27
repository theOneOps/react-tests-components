import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducer/playerReducer";

export const store = configureStore({
    reducer:{
        playerReducer,
    }
})