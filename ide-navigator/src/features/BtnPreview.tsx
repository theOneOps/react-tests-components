import { useSelector, useDispatch } from "react-redux";
import { changePreview } from "../reducers/preview";
import openedEye from "../assets/opened-eye.png";
import closedEye from "../assets/closed-eye.png";

export default function BtnPreview() {
  const preview = useSelector((state) => state.preview);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(changePreview(!preview.value))}
      className="bg-sky-500 hover:bg-sky-700 px-3 py-2 space-x-2 mx-auto flex items-center rounded-sm">
      <img
        className="w-6 h-6 object-cover"
        src={preview.value ? closedEye : openedEye}
        alt={preview.value ? "closed eye" : "opened eye"}
      />
      <span>{preview.value ? "hide preview" : "show preview"}</span>
    </button>
  );
}
