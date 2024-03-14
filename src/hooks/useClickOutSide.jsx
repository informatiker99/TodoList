import React, { useEffect, useRef } from "react";

function useClickOutSide(ref, callback) {
  const clickOutSide = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
      console.log("y");
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickOutSide, true);
    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  });
}

export { useClickOutSide };
