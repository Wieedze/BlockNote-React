import React from "react";
import styles from "./AddNote.module.css";

function AddNoteButton({ onAdd }) {
    return (
        <button className={styles.addBtn} onClick={onAdd}>
            Ajouter une note
        </button>
    );
}

export default AddNoteButton;
