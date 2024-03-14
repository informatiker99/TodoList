import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./assets/components/header/Header";
import TodoContainer from "./assets/components/todo/TodoContainer";
import { useFetchData } from "./hooks/useFetchData";
function App() {
  // const [num, setNum] = useState(0);
  // const initialState = 0;
  // const reducer = (stateValue, action) => {
  //   switch (action.type) {
  //     case "inc": {
  //       return stateValue + 1;
  //     }
  //     case "dec": {
  //       return stateValue - 1;
  //     }
  //     case "inc5": {
  //       return stateValue + 5;
  //     }
  //     case "dec5": {
  //       return stateValue - 5;
  //     }
  //     default: {
  //       return stateValue;
  //     }
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <Header></Header>
        <TodoContainer />
      </div>
      {/* <button
        className="border border-zinc-400 p-3 mx-2"
        onClick={() => dispatch({ type: "inc" })}
      >
        +1
      </button>
      <button
        className="border border-zinc-400 p-3 mx-2"
        onClick={() => dispatch({ type: "dec" })}
      >
        -1
      </button>
      <button
        className="border border-zinc-400 p-3 mx-2"
        onClick={() => dispatch({ type: "inc5" })}
      >
        +5
      </button>
      <button
        className="border border-zinc-400 p-3 mx-2"
        onClick={() => dispatch({ type: "dec5" })}
      >
        -5
      </button>

      <span>{state}</span> */}
    </>
  );
}

export default App;
