import React, { useState, useEffect } from "react";
import styles from "./MarkDownInput.module.css";

function MarkDownInput({ onSave, initialTitle = "", initialContent = "" }) {
    const [textTitle, setTextTitle] = useState(initialTitle);
    const [textInput, setTextInput] = useState(initialContent);

    // Synchroniser les valeurs internes avec les props au changement
    useEffect(() => {
        setTextTitle(initialTitle);
        setTextInput(initialContent);
    }, [initialTitle, initialContent]);

    const handleSaveClick = () => {
        if (onSave) {
            onSave({ title: textTitle, content: textInput });
        }
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={textTitle}
                onChange={(e) => setTextTitle(e.target.value)}
                placeholder="Titre du texte"
                className={styles.titleInput}
            />
            <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Écris ton texte ici..."
                rows={10}
                className={styles.contentTextarea}
            />
            <button onClick={handleSaveClick} className={styles.saveButton}>
                Sauvegarder
            </button>
        </div>
    );
}

export default MarkDownInput;
