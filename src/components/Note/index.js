import React from 'react';
import Markdown from 'markdown-to-jsx';
import './style.scss';

export const Note = ({ note, delNote }) => {
  const { text, created, id, edit } = note;
  return (
    <div className='note'>
      <div className='note__header'>
        <span>{created}</span>
        <div className='note__buttons'>
          <button className='btn btn--delete' onClick={() => delNote(id)}>
            Delete
          </button>
          <button className='btn btn--edit' onClick={() => edit(id)}>
            Edit
          </button>
        </div>
      </div>
      <div className='note__body' contentEditable={edit}>
        <Markdown>{text}</Markdown>
      </div>
    </div>
  );
};
