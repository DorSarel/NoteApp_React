import React from 'react';
import { Note } from '../Note';
import './style.scss';

export const NoteGallery = ({
  notes = [],
  edit,
  textToUpdate,
  confirmEdit,
  updateText,
}) => {
  let notesComp = notes.map(note => (
    <Note
      key={note.id}
      note={note}
      edit={edit}
      textToUpdate={textToUpdate}
      confirmEdit={confirmEdit}
      updateText={updateText}
    />
  ));
  return <div className='gallery'>{notesComp}</div>;
};
