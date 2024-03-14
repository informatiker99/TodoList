import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Todo({ notes, setNotes, setNotesAssProps }) {
  const [todoInputValue, setTodoInputValue] = useState({
    title: "",
    content: "",
  });
  // const [notes, setNotes] = useState([]);
  const inputContentHandler = (e, type) => {
    setTodoInputValue({
      ...todoInputValue,
      [type]: e.target.value,
    });
  };

  const addNoteItem = (e) => {
    e.preventDefault();
    const newNotes = {
      title: todoInputValue.title,
      content: todoInputValue.content,
      created: new Date().toISOString(),
      completed: false,
      id: notes.length + 1,
    };
    setNotesAssProps(newNotes);
    setTodoInputValue({ title: "", content: "" });
    const notify = toast.success("Note Added  !");
  };

  return (
    <div className="m-3 w-full basis-1/4">
      <form
        action="#"
        className="w-full flex flex-col items-center"
        onSubmit={(e) => addNoteItem(e)}
      >
        <Toaster />

        <div className="todo-title m-2 w-full">
          <label htmlFor="todo_title"></label>
          <input
            type="text"
            id="todo_title"
            value={todoInputValue.title}
            onChange={(e) => inputContentHandler(e, "title")}
            placeholder="Add title"
            className="p-2 border border-stone-300 rounded-md w-full"
          />
        </div>
        <div className="todo-content m-2 w-full">
          <label htmlFor="todo_content"></label>
          <input
            type="text"
            id="todo_content"
            value={todoInputValue.content}
            onChange={(e) => inputContentHandler(e, "content")}
            placeholder="Add content"
            className="border p-2 border-stone-300 rounded-md w-full"
          />
        </div>
        <button className="border bg-slate-500 text-slate-100 shadow-lg rounded-md mt-2 border-stone-100 w-full h-10">
          {" "}
          Add to list{" "}
        </button>
      </form>
    </div>
  );
}

export default Todo;
