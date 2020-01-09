import React from 'react';
import './style.scss';

export const Note = ({ note, delNote, edit }) => {
  const { title, body, created, id } = note;
  return (
    <div className='note'>
      <div className='note__header'>
        <h5>{title}</h5>
        <span>{created}</span>
        <div className='header__buttons'>
          <button className='btn btn--delete' onClick={() => delNote(id)}>
            Delete
          </button>
          <button className='btn btn--edit' onClick={() => edit(id)}>
            Edit
          </button>
        </div>
      </div>
      <div className='note__body'>{body}</div>
    </div>
  );
};
