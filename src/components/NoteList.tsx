import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { INote } from "src/modal/Note.model";

interface INoteListProps {}

const NoteList: React.FC<INoteListProps> = () => {
  const [noteData, setNoteData] = useState<INote[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        await axios.get("http://localhost:3000/notes").then((res) => {
          setNoteData(res.data);
        });
      } catch (error) {
        alert("something went wrong");
      }
    };
    fetchNotes();
  }, [noteData]);

  const handleDelete = async (id: string) => {
    try {
      axios.delete(`http://localhost:3000/notes/${id}`).then(() => {
        alert("note is deleted");
      });
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <div className="mt-32">
      <div className="container m-auto">
        <h1 className="mb-10">Note List</h1>
        {noteData.map((d) => {
          return (
            <div
              key={d.id}
              className={`bg-[${d.color}] children:mb-5 border p-3
              `}
            >
              <h1>{d.title}</h1>
              <h3>{d.text}</h3>
              <p>{d.date}</p>
              <button
                onClick={() => handleDelete(d.id)}
                className="py-2 px-4 bg-red-500 text-white rounded-md"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
