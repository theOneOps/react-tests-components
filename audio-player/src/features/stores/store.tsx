import { configureStore } from "@reduxjs/toolkit"
import audioPlayer from "../reducers/audioPlayer"
import progressBar from "../reducers/progressBar"

export const store = configureStore({
    reducer:
    {
        audioPlayer,
        progressBar,
    }
})