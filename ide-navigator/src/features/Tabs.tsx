import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../reducers/tabIndex";
import { showPreview } from "../reducers/preview";

export default function Tabs() {
  const allTabs = useSelector((state) => state.tabReducer);
  const currentIndex = useSelector(state => state.tabIndex);

  const dispatch = useDispatch()
  
  return (
    <div className="onglet list-none w-full flex justify-around border-b md:border-b-0 md:border-r md:w-1/6 md:flex-col md:justify-start md:space-y-2 md:h-full bg-black text-white">
      {allTabs.list.map((tab) => (
        <li
        onClick={()=>{
          dispatch(changeIndex(tab.id))
          dispatch(showPreview())
        }}
          key={tab.id}
          className="w-full flex p-2 justify-center cursor-pointer hover:bg-slate-700 space-x-2">
            <img src={tab.src} alt="" className="w-6 h-6 object-cover" />
          <span>{tab.name}</span>{" "}
        </li>
      ))}
    </div>
  );
}
