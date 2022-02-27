import * as React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { INote } from "src/modal/Note.model";

interface ICreateNoteProps {}

const CreateNote: React.FC<ICreateNoteProps> = () => {
  const [error, setError] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const addNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (title === "" || text === "") {
      setError("please complete the form");
    } else {
      const note: INote = {
        id: new Date().toString(),
        title: title,
        text: text,
        color: color.toString(),
        date: new Date().toString(),
      };
      try {
        axios.post("http://localhost:3000/notes", note).then(() => {
          alert("note is added");
        });
      } catch (error) {
        alert(error);
      }
      setError("");
      setText("");
      setTitle("");
    }
  };

  return (
    <form
      ref={formRef}
      className="container m-auto my-5 children:flex 
    children:flex-col children:mb-5"
    >
      <h1>Create Note</h1>
      {error && <p className="text-red-600">{error}</p>}
      <div>
        <label>Title</label>
        <input
          className="noteInputs"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Title</label>
        <textarea
          className="noteInputs"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label className="font-2">Title</label>
        <input
          className="noteInputs"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button
        className="py-2 px-4 bg-blue-500 text-white rounded-md"
        onClick={(e) => addNote(e)}
      >
        submit
      </button>
    </form>
  );
};

export default CreateNote;
