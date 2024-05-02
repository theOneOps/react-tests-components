import ManageChrono from "./components/ManageChrono";
import { useSelector } from "react-redux";
import ChronoDisplayed from "./components/ChronoDisplayed";
import BtnStart from "./components/BtnStart";
function App() {
  const chronos = useSelector((state) => state.chrono);

  return (
    <>
      <div
        className=" container max-w-[400px]
  text-white flex flex-col items-center py-4 px-10 border mx-auto mt-10 space-y-4">
        <h1 className="text-xl">Pomodoro App</h1>
        <div className="flex space-x-4 justify-center">
          <ManageChrono
            name={chronos.session.name}
            value={chronos.session.value}
          />
          <ManageChrono name={chronos.pause.name} value={chronos.pause.value} />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <ChronoDisplayed />
          <BtnStart/>
        </div>
      </div>
    </>
  );
}

export default App;
