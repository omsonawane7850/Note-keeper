import React, { useState } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  return (
    <>
      <Header />

      <main className="container notes-container">
        <div className="notes-toolbar">
          <div>
            <h2>My Notes</h2>
            <p>Keep your ideas organized.</p>
          </div>

          <button
            className="btn btn-primary add-note-btn"
            onClick={() => setShowForm(true)}
          >
            + Add Note
          </button>
        </div>

        {showForm && (
          <div className="form-container mb-4">
            <NoteForm
              onAddNote={handleAddNote}
              onClose={() => setShowForm(false)}
            />
          </div>
        )}

        {notes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>No notes yet</h3>
            <p>Create your first note to get started.</p>

            {!showForm && (
              <button
                className="btn btn-outline-primary"
                onClick={() => setShowForm(true)}
              >
                Create Your First Note
              </button>
            )}
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default App;