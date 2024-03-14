import React, { useEffect } from "react";
import { CiTrash } from "react-icons/ci";

function TodoList({ notes, todoRemover, noteStatus }) {
  if (notes.length === 0) return <div>Empty ...</div>;
  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, []);
  return (
    <div className="flex flex-col basis-1/3 gap-y-4 mt-4">
      {notes.map((item, index) => {
        return (
          <div className="shadow-xl " key={index}>
            <div className="note-header flex p-3 justify-between bg-slate-500 rounded-md items-center text-white">
              <div className="">{item.title}</div>
              <div className="flex">
                <button className="mx-5 " onClick={() => todoRemover(item.id)}>
                  <CiTrash className="text-xl " />
                </button>
                <input
                  type="checkbox"
                  className="accent-orange-500 "
                  onChange={() => noteStatus(item.id)}
                />
              </div>
            </div>
            <div className="note-body h-[8rem] p-3 bg-slate-200 border rounded-md">
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
