import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export { useLocalStorage };
