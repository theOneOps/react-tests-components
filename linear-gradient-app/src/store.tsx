import { configureStore } from "@reduxjs/toolkit";
import coolors from "./reducers/coolors";

export const store = configureStore({
    reducer:{
        coolors,
    }
})