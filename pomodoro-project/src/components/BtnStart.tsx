import { useSelector, useDispatch } from "react-redux";
import { resetChrono, startChrono } from "../reducers/chrono";

import play from "../assets/play.png"
import reset from "../assets/reset.png"

export default function BtnStart() {

  const chrono = useSelector(state => state.chrono)
  const dispatch = useDispatch()
  return (
    <>
      <button
      onClick={()=>{
        if (!chrono.isChronoLaunched)
          dispatch(startChrono())
        else
          dispatch(resetChrono())
      }}
       className="bg-gray-100 px-3 py-2 flex justify-center items-center text-gray-800 space-x-1 rounded-sm">
        <span>{chrono.isChronoLaunched ? "Reset" : "Start"}</span>
        <img src={chrono.isChronoLaunched ? reset : play} alt={chrono.isChronoLaunched ? "reset-icon" : "play-icon"} className="w-5 h-5" />
      </button>
    </>
  );
}
