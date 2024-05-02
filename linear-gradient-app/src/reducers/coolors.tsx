import { createSlice } from "@reduxjs/toolkit";
import getGradient from "../utils/getGradientColor";


const initialState = {
  content: {
    min: 2,
    max: 5,
    nbColors: 2,
    colors: [
      { id: 0, nameColor: "#ff5733", position: 20 },
      { id: 1, nameColor: "#ffbd33", position: 30 },
    ],
    globalAngleContainer: 30,
    currentColor: 0,
  },
};

console.log(getGradient(initialState))

const coolors = createSlice({
  name: "coolors",
  initialState,
  reducers: {
    addNewColor: (state, action) => {
      if (state.content.nbColors + 1 <= state.content.max)
        {
          const id: number = state.content.nbColors;
        state.content.colors.push({
          id,
          nameColor: "#333",
          position: 10,
        });
        state.content.nbColors++;
          }
    },
    deleteColor: (state, action) => {
      if (state.content.nbColors > state.content.min) {
        const lastColorId = state.content.nbColors - 1;
        state.content.colors = state.content.colors.filter(
          (e) => e.id != lastColorId
        );
        state.content.nbColors--;
      }
      state.content.currentColor = 0;
    },
    changingColorPosition: (state, action) => {
      const currentIdx : number = state.content.currentColor
      state.content.colors[currentIdx] = {
        ...state.content.colors[currentIdx],
        position: action.payload,
      };
    },

    changingGlobalAngle: (state, action) => {
      state.content.globalAngleContainer = action.payload;
    },

    changingColorValue: (state, action) => {
      state.content.colors[action.payload.id] = {
        ...state.content.colors[action.payload.id],
        nameColor: action.payload.name,
      };
    },

    setCurrentColor:(state, action) => {
      state.content.currentColor = action.payload
    }
  },
});

export const {
  addNewColor,
  deleteColor,
  changingColorPosition,
  changingGlobalAngle,
  changingColorValue,
  setCurrentColor,
} = coolors.actions;
export default coolors.reducer;
