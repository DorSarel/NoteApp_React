import React from 'react';
import { Note } from '../Note';
import './style.scss';

export const NoteGallery = ({ notes, deleteNote }) => {
  let notesComp = notes.map(note => (
    <Note key={note.id} note={note} delNote={deleteNote} />
  ));
  return <div className='gallery'>{notesComp}</div>;
};
