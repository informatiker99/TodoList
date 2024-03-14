import React, { useRef } from "react";
import { GrClose } from "react-icons/gr";
import { useClickOutSide } from "../../../hooks/useClickOutSide";

function Modal({ header, children, setOpenModal }) {
  const mdRef = useRef(); 
  useClickOutSide(mdRef, ()=>setOpenModal(false));
  return (
    <div
     
      className="modal absolute w-full h-full top-5 backdrop-blur-[1px] left-0"
    >
      <div  ref={mdRef} className="modal-container  flex flex-col shadow-md rounded-md border h-[15rem] absolute left-[50%]  translate-x-[-50%] bg-white">
        <div className="modal-header flex justify-between px-4 py-3 border-y border-r-sky-200 ">
          {header}{" "}
          <span>
            <GrClose className="cursor-pointer" />
          </span>
        </div>
        <div className="modal-body p-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
