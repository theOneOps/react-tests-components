import { useSelector, useDispatch } from "react-redux";
import { updateCode } from "../reducers/tabReducer";

export default function SeeCode() {
  const currentTab = useSelector((state) => state.tabReducer);
  const currentIndex = useSelector((state) => state.tabIndex);
  const preview = useSelector((state) => state.preview);
  const dispatch = useDispatch();

  console.log(currentTab.list[currentIndex.value].content)

  return (
    <div className="w-full h-full md:w-5/6">
    {!preview.value && (
      <textarea
      value={currentTab.list[currentIndex.value].content}
      onChange={e=>dispatch(updateCode({id:currentIndex.value, value:e.target.value}))}
        className="absolute w-full h-full resize-none text-lg bg-black text-white"
        spellCheck="false"
      />
    ) }
    </div>
  )
  
}