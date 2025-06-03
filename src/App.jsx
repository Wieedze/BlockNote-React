import React, { useState, useEffect } from "react";
import NoteDisplay from "./components/NoteDisplay";
import MarkDownInput from "./components/MarkDownInput";
import useNoteManager from "./components/NoteManager";
import NoteList from "./components/NoteList";
import styles from "./App.module.css";

function App() {
  const { notes, updateNote, deleteNote, addNewNote } = useNoteManager();
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  // Sauvegarde les notes dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    const newNoteId = addNewNote();
    setSelectedNoteId(newNoteId);
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId) || null;

  const handleSave = (noteData) => {
    if (selectedNote) {
      updateNote({ ...selectedNote, ...noteData });
    } else {
      addNewNote(noteData);
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <NoteList
          notes={notes}
          selectedNoteId={selectedNoteId}
          onSelect={setSelectedNoteId}
          onDelete={deleteNote}
          onAdd={handleAddNote}
        />
      </aside>

      <main className={styles.main}>
        <div className={styles.display}>
          {selectedNote ? (
            <NoteDisplay note={selectedNote} />
          ) : (
            <p>Sélectionnez une note</p>
          )}
        </div>
        <div className={styles.editor}>
          <MarkDownInput
            key={selectedNoteId}
            onSave={handleSave}
            initialTitle={selectedNote?.title || ""}
            initialContent={selectedNote?.content || ""}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
