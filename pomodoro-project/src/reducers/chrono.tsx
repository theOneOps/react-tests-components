import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    name: "session",
    value: 1500,
  },

  pause: {
    name: "pause",
    value: 300,
  },

  isChronoLaunched: false,
  passedCycles: 0,
  chronoToDisplay: 1500,
  intervalID: undefined,
  type: "session",
};

const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    updateTimePomodoro: (state, action) => {
      const currentStateComponent = state[action.payload.name];
      if (action.payload.type == "-") {
        if (currentStateComponent.value == 0) return;
        else currentStateComponent.value -= 60;
      } else {
        currentStateComponent.value += 60;
      }
    },

    tick: (state, action) => {
      if (state.type == "session") {
        if (state.chronoToDisplay == 0) {
          state.chronoToDisplay = state.pause.value;
          state.type = "pause";
        } else state.chronoToDisplay -= 1;
      } else {
        if (state.chronoToDisplay == 0) {
          state.chronoToDisplay = state.session.value;
          state.type = "session";
          state.passedCycles += 1;
        } else state.chronoToDisplay -= 1;
      }
    },

    resetChrono: (state, action) => {
      if (state.intervalID) window.clearInterval(state.intervalID);
      state.intervalID = undefined;
      state.isChronoLaunched = false;

      state.chronoToDisplay = state.session.value;
      state.passedCycles = 0;
      state.type = "session";
    },

    setUpIntervalId: (state, action) => {
      state.intervalID = action.payload;
    },

    startChronoTime: (state, action) => {
      state.isChronoLaunched = true;
      state.chronoToDisplay = state.session.value;
    },
  },
});

export function startChrono(action) {
  return function (dispatch, getState) {
    dispatch(startChronoTime());

    const theInterval = setInterval(() => {
      dispatch(tick());
    }, 1000);
    dispatch(setUpIntervalId(theInterval));
    dispatch(tick());
  };
}

export const {
  updateTimePomodoro,
  tick,
  resetChrono,
  setUpIntervalId,
  startChronoTime,
} = chrono.actions;
export default chrono.reducer;
