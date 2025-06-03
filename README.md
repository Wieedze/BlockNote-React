
=======
# React Markdown Note App

A simple, offline-capable note-taking application built with React, allowing users to write notes in Markdown and see a live HTML preview. Notes are saved in the browser's `localStorage` to ensure persistence between sessions without server storage, fully respecting privacy and GDPR.

---

## Project Overview

This project recreates a classic note-taking app accessible on all devices, with features including:

- Writing notes in Markdown syntax  
- Live conversion and display of Markdown as HTML  
- Persistent storage in browser's `localStorage`  
- Offline availability  
- Managing multiple notes with easy navigation  

---

## Application Structure

The app is divided into two main parts:

### Sidebar (Left)

- Displays a list of existing notes  
- Shows each note's title and a preview snippet (about 15 words)  
- Includes a button to create new notes  
- Allows selecting and deleting notes  

### Main Content (Right)

- **Top section:** displays the selected note rendered as HTML from Markdown  
- **Bottom section:** Markdown editor composed of:
  - An input field for the note title  
  - A textarea for editing the note content in Markdown  
  - A save button to persist changes (optional, can be auto-saving)

---

## Components Overview

- **App.jsx**  
  Root component managing state, loading/saving notes from `localStorage`, and coordinating subcomponents.

- **NoteList**  
  Sidebar list displaying all notes with titles and previews, supports selection and deletion.

- **NoteDisplay**  
  Shows the rendered HTML of the selected note using `showdown` for Markdown conversion and React's `dangerouslySetInnerHTML`.

- **MarkDownInput**  
  Controlled inputs for note title and content (textarea), calls back to parent on save.

- **NoteManager (custom hook)**  
  Handles all note-related logic: adding, updating, deleting, and syncing with `localStorage`.

---

## Features

- Create, edit, delete, and switch between notes  
- Live preview of Markdown converted to HTML  
- Data persistence using `localStorage` for offline use  
- Modular and maintainable React components with scoped CSS modules  
- Responsive layout using Flexbox  

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
Install dependencies:

bash
Copier
Modifier
npm install
Run the development server:

bash
Copier
Modifier
npm start
Open your browser to:

arduino
Copier
Modifier
http://localhost:3000
Usage
Click Add to create a new note.

Select a note in the sidebar to view and edit it.

Modify the title and content in Markdown in the editor below the preview.

Click Save (if enabled) to persist changes, or rely on auto-save.

Notes are stored locally and will persist after page reloads.

Technologies Used
React with hooks (useState, useEffect)

showdown for Markdown to HTML conversion

LocalStorage API for persistent client-side data

CSS Modules for component-based styling

JavaScript ES6+ and JSX

Possible Enhancements
Remove manual save button in favor of automatic saving on change

Support full Markdown syntax with extended features (tables, footnotes, etc.)

Enable drag-and-drop or reordering of notes

Add search and filtering capabilities in sidebar

Implement synchronization with cloud storage (e.g., Firebase)

Transform into a Progressive Web App (PWA) for better mobile support
>>>>>>> 0c21895b8fc5b3b4adecd973ad739424f4d63ba6
