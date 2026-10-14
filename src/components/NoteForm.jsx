import { useState } from "react";

const NoteForm = ({ onAddNote, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    const newNote = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date().toLocaleDateString(),
    };

    onAddNote(newNote);

    setTitle("");
    setContent("");

    onClose();
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h3>Create a Note</h3>

      <div className="mb-3">
        <label htmlFor="note-title" className="form-label">
          Title
        </label>

        <input
          id="note-title"
          type="text"
          className="form-control"
          placeholder="Enter note title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          maxLength={100}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="note-content" className="form-label">
          Content
        </label>

        <textarea
          id="note-content"
          className="form-control"
          placeholder="Write your note..."
          rows="5"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          Save Note
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
