import React from 'react';
import { Note } from '../Note';
import './style.scss';

export const NoteGallery = ({ notes }) => {
  let notesComp = notes.map((note, idx) => (
    <Note key={idx} title={note.title} body={note.body} />
  ));
  return <div className='gallery'>{notesComp}</div>;
};
