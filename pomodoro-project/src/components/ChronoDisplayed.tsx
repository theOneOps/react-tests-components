import { useSelector } from "react-redux"
import getFormatedChrono from "../utils"

export default function ChronoDisplayed() {

  const chrono = useSelector(state => state.chrono)

  return (
    <>
    <div className="flex flex-col items-center">
            <h3 className="text-lg">{chrono.type == "session" ? "Work" : "Pause"}</h3>
            <p className="text-2xl p-2 bg-gray-100 text-gray-800 rounded-sm">
              {!chrono.isChronoLaunched ? getFormatedChrono(chrono.session.value) : getFormatedChrono(chrono.chronoToDisplay)}
            </p>
            <p>Passed cycle(s): {chrono.passedCycles}</p>
          </div>
    </>
  )
}