import React from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      <main className="container notes-container">
        <div className="notes-toolbar">
          <div>
            <h2>My Notes</h2>
            <p>Keep your ideas organized.</p>
          </div>

          <button className="btn btn-primary add-note-btn">
            + Add Note
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search your notes..."
          />
        </div>

        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No notes yet</h3>
          <p>Create your first note to get started.</p>
          <button className="btn btn-outline-primary">
            Create Your First Note
          </button>
        </div>
      </main>
    </>
  );
};

export default App;