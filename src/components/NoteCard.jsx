import React from "react";

const NoteCard = ({ note }) => {
  return (
    <article className="note-card">
      <h3>{note.title}</h3>

      <p className="note-content">{note.content}</p>

      <small className="note-date">{note.createdAt}</small>
    </article>
  );
};

export default NoteCard;