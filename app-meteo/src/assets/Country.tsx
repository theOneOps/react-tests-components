import ModalWindow from "../ModalWindow";
import { createPortal } from "react-dom";
import { useState } from "react";

export default function Country({ country }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <li className="w-72 h-72 relative cursor-pointer list-none" onClick={()=>setModal(!modal)}>
        <h1 className="absolute z-0 left-0 bg-gray-200 p-2 shadow-md">{country.name.common}</h1>
        <img src={country.flags.png} alt="" className="absolute -z-10"/>
        {modal && createPortal(<ModalWindow closeModal={()=>setModal(!modal)} country={country} />, document.body)}
      </li>
    </>
  );
}

