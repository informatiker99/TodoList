import { React, useState, useEffect } from "react";
import Todo from "./Todo";
import Example from "../ui/Dropdown";
import TodoList from "./TodoList";
import toast from "react-hot-toast";
import Modal from "../ui/Modal";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

function TodoContainer() {
  const [notes, setNotes] = useLocalStorage("notes", []) ; 
  const [openModal, setOpenModal] = useState(true);
  const setNotesAssProps = (newNotes) => {
    setNotes([...notes, newNotes]);
  };

  const todoRemover = (id) => {
    console.log(id);
    const filteredNotes = notes.filter((note) => id !== note.id);
    setNotes(filteredNotes);

    const deletAlert = toast.error("Item removed ");
  };

  const noteStatus = (id) => {
    let setStatus = notes.map((item) =>
      item.id == id ? { ...item, completed: !item.completed } : item
    );
    setNotes(setStatus);
    console.log(notes);
  };

  return (
    <div className="flex w-full">
      <Todo notes={notes} setNotesAssProps={setNotesAssProps} />
      <Example items={["All", "Completed", "Uncompleted"]}></Example>
      <TodoList
        notes={notes}
        todoRemover={todoRemover}
        noteStatus={noteStatus}
      />

      {openModal && (
        <Modal header="this is modal" setOpenModal={setOpenModal}>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat qui
            minima et molestias eveniet, nihil expedita nulla consequatur
            possimus tempore!
            <a href="#" className="underline text-blue-500 mx-2">
              visit the link
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default TodoContainer;
