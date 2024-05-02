import { useDispatch } from "react-redux";
import { addNewColor, deleteColor } from "../reducers/coolors";

export default function BtnAddDeleteColors() {
    const dispatch = useDispatch()

  return (
    <div className="flex space-x-2 ">
      <button
      onClick={()=> dispatch(deleteColor())}
       className="w-8 h-5 border outline-none flex justify-center items-center rounded-sm">
        -
      </button>

      <button
      onClick={()=> dispatch(addNewColor())}
       className="w-8 h-5 border outline-none flex justify-center items-center rounded-sm">
        +
      </button>
    </div>
  );
}
