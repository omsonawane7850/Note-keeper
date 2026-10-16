import { useState } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );

    if (editingNote?.id === id) {
      handleCloseForm();
    }
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingNote(null);
  };

  const handleOpenForm = () => {
    setEditingNote(null);
    setShowForm(true);
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
            onClick={handleOpenForm}
          >
            + Add Note
          </button>
        </div>

        {showForm && (
          <div className="form-container mb-4">
            <NoteForm
              onAddNote={handleAddNote}
              onUpdateNote={handleUpdateNote}
              editingNote={editingNote}
              onClose={handleCloseForm}
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
                onClick={handleOpenForm}
              >
                Create Your First Note
              </button>
            )}
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEditNote={handleEditNote}
                onDeleteNote={handleDeleteNote}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default App;