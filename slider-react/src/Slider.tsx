import { useState } from "react";
import getImages from "./getImages";

export default function Slider() {
  const [count, setCount] = useState(0);
  const [currentImg] = useState(getImages());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setIndex(value: number) {
    setCount((count) => {
      if (count + value > currentImg.length-1) return 0;
      else if (count + value < 0) return currentImg.length - 1;
      else return count + value;
    });
    console.log(count);
  }

  //   function back_image() {
  //     if (count == 0) setCount(currentImg?.length - 1);
  //     else setCount((count) => count - 1);
  //   }

  //   function front_image() {
  //     if (count == currentImg?.length - 1) setCount(0);
  //     else setCount((count) => count + 1);
  //   }

  return (
    <div className="flex flex-col items-center w-96 h-96">
      <h2>{`${count + 1} / ${currentImg.length}`}</h2>
      <div className="w-full h-full flex justify-center items-center">
        <button onClick={() => setIndex(-1)} className="text-xl rounded-md p-4">
          {"<"}
        </button>
        <div className="w-full h-full relative">
          <span className="absolute right-0 p-2 z-10 bg-gray-200">
            {currentImg[count].title}
          </span>
          <img
            src={currentImg[count].src}
            alt={currentImg[count].alt}
            className="w-full h-full absolute inset-0 object-cover z-0"
          />
        </div>
        <button onClick={() => setIndex(1)} className="text-xl rounded-md p-4">
          {">"}
        </button>
      </div>
    </div>
  );
}
