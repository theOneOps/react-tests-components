import { configureStore } from "@reduxjs/toolkit"
import preview from "./reducers/preview"
import tabIndex from "./reducers/tabIndex"
import tabReducer from "./reducers/tabReducer"

export const store = configureStore({
    reducer:{
        preview,
        tabIndex,
        tabReducer
    }
  })

