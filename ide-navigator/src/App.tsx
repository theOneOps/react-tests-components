import { Provider, useSelector } from "react-redux"
import { store } from "./store";
import BtnPreview from "./features/BtnPreview";
import Tabs from "./features/Tabs";
import ThePreview from "./features/ThePreview";
import SeeCode from "./features/SeeCode";



function App() {


  return (
    <Provider store={store}>
      <div className="w-full h-full">
      <div className="p-4 border-b border-white flex bg-black text-white items-center">
        <h1 className="text-lg md:text-xl">theSmartIDE</h1>
        <BtnPreview/>
        <div className="weird-btn">...</div>
      </div>
      <div className="flex w-full flex-col md:flex-row h-full bg-white">
        <Tabs/>
        <div className="flex w-full h-full flex-col">
        
        <ThePreview/>
        <SeeCode/>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
