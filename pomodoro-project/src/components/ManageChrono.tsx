import { useDispatch } from "react-redux";
import { updateTimePomodoro } from "../reducers/chrono";

export default function ManageChrono({ value, name }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col mt-4 space-y-2">
        <h3 className="text-center text-lg">{name}</h3>
        <div className="flex space-x-2 items-center">
          <button
            onClick={() => dispatch(updateTimePomodoro({ name, type: "+" }))}
            className="w-5 h-5 flex justify-center items-center bg-gray-100 text-gray-800 rounded-sm text-lg">
            +
          </button>
          <span>{(value/60) > 9 ? value/60 : `0${value/60}`}</span>
          <button
            onClick={() => dispatch(updateTimePomodoro({ name, type: "-" }))}
            className="w-5 h-5 flex justify-center items-center bg-gray-100 text-gray-800 rounded-sm text-lg">
            -
          </button>
        </div>
      </div>
    </>
  );
}
