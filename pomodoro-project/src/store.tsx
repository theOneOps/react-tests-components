import chrono from "./reducers/chrono";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        chrono,
    }
})