const NoteCard = ({ note, onDeleteNote }) => {
  return (
    <article className="note-card">
      <h3>{note.title}</h3>

      <p className="note-content">{note.content}</p>

      <div className="note-card-footer">
        <small className="note-date">{note.createdAt}</small>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDeleteNote(note.id)}
          aria-label={`Delete ${note.title}`}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default NoteCard;