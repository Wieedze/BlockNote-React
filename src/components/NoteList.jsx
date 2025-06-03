import React from "react";
import styles from "./NoteList.module.css";
import AddNote from "./AddNote";

function NoteList({ notes, selectedNoteId, onSelect, onDelete, onAdd }) {
    return (
        <div className={styles.noteList}>
            <div className={styles.addNoteWrapper}>
                <AddNote onAdd={onAdd} />
            </div>
            {notes.length === 0 && <p>Aucune note enregistrée.</p>}
            <ul className={styles.noteListItems}>
                {notes.map((note) => (
                    <li
                        key={note.id}
                        onClick={() => onSelect(note.id)}
                        className={`${styles.noteItem} ${note.id === selectedNoteId ? styles.selected : ""}`}
                    >
                        <div className={styles.noteText}>
                            <h2>{note.title || "(Sans titre)"}</h2>
                            <p className={styles.preview}>
                                {note.content?.slice(0, 80).replace(/\n/g, " ") || "Aucun contenu..."}
                            </p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(note.id);
                            }}
                        >
                            🗑
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoteList;
