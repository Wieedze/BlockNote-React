// NoteManager.jsx
import { useState, useEffect } from "react";

export default function useNoteManager() {
    const [notes, setNotes] = useState(() => {
        const stored = localStorage.getItem("notes");
        try {
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const updateNote = (updatedNote) => {
        setNotes((prev) =>
            prev.map((note) => (note.id === updatedNote.id ? updatedNote : note))
        );
    };

    const deleteNote = (id) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };


    
  const addNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      content: ""
    };
    setNotes([newNote, ...notes]);
    return newNote.id
  };

    return { notes, updateNote, deleteNote ,addNewNote };
}
