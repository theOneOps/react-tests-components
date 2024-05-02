import { useSelector, useDispatch } from "react-redux";
import ColorContainer from "./features/ColorContainer";
import BtnAddDeleteColors from "./features/BtnAddDeleteColors";
import { setCurrentColor } from "./reducers/coolors";
import { useState } from "react";
import { changingGlobalAngle, changingColorPosition } from "./reducers/coolors";
import getGradient from "./utils/getGradientColor";

function App() {

  const coolors = useSelector(state => state.coolors)
  const dispatch = useDispatch()

  const [currentAngle, setCurrentAngle] = useState(coolors.content.globalAngleContainer)
  const [currentPosition, setCurrentPosition] = useState(coolors.content.colors[coolors.content.currentColor].position || "")


  return (
    <>
      <div className="w-full container border-2 flex space-x-2 mx-auto my-20 p-2 max-w-[600px]">
        <div className="flex flex-col space-y-2 w-1/2">
          <h1 className="text-center text-2xl font-bold">Gradient generartor</h1>
          <p className="text-center">Bring style to your app</p>
          <div className="flex space-x-2">
            <span>Colors </span>
            <span> min : {coolors.content.min}</span>
            <span>max : {coolors.content.max}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {coolors.content.colors.map(color => (
              <ColorContainer key={color.id} id={color.id} value={color.nameColor} />
            ))}
          </div>

          <BtnAddDeleteColors/>

          <div className="flex flex-col space-y-2">
            <h3>Pick and change a color's position</h3>
            <select
              className="bg-black border w-20 p-1 text-center rounded-sm text-white"
              name="colors"
              id="color-index">
                {/* onClick={()=>dispatch(setCurrentColor(color.id))} */}
                {coolors.content.colors.map(color=>(
                  <option key={color.id} onClick={()=>dispatch(setCurrentColor(color.id))} value={`Color ${color.id + 1}`}>{`Color ${color.id + 1}`}</option>
                ))}
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="col-pos">Color's position</label>
            <input
            value={currentPosition}
            onChange={(e)=>{
              setCurrentPosition(e.target.value)
              dispatch(changingColorPosition(e.target.value))
            }}
             id="col-pos" type="range" min={0} max={100} />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="col-pos">Color's global range </label>
            <input
            value={currentAngle}
            onChange={(e)=>{
              setCurrentAngle(e.target.value)
              dispatch(changingGlobalAngle(e.target.value))
            }}
             id="col-pos" type="range" min={0} max={360} />
          </div>
        </div>

        <div
        style={{backgroundImage:`${getGradient(coolors)}`}} 
        className={`w-1/2 border-2`}></div>
      </div>
    </>
  );
}

export default App;
