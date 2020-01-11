import React from 'react';
import Markdown from 'markdown-to-jsx';
import './style.scss';

export const Note = ({
  note,
  edit,
  textToUpdate,
  confirmEdit,
  updateText,
  deleteNote,
}) => {
  const { text, created, id, editMode } = note;

  let textToShow = (
    <div className='note__body'>
      <Markdown options={{ forceBlock: true }}>{text}</Markdown>
    </div>
  );
  let editButton = (
    <button className='btn btn--edit' onClick={() => edit(id)}>
      Edit
    </button>
  );

  if (editMode) {
    textToShow = (
      <textarea
        className='note__text'
        value={textToUpdate}
        onChange={updateText}
      ></textarea>
    );
    editButton = (
      <button className='btn btn--edit' onClick={() => confirmEdit(id)}>
        Update
      </button>
    );
  }
  return (
    <div className='note'>
      <div className='note__header'>
        <span>{created}</span>
        <div className='note__buttons'>
          <button className='btn btn--delete' onClick={() => deleteNote(id)}>
            Delete
          </button>
          {editButton}
        </div>
      </div>
      {textToShow}
    </div>
  );
};
