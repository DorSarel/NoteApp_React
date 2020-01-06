import React from 'react';
import './style.scss';

export const Note = ({ title, body }) => (
  <div className='note'>
    <div className='note__header'>
      <h5>{title}</h5>
      <div className='header__buttons'>
        <button className='btn btn--delete'>Delete</button>
        <button className='btn btn--edit'>Edit</button>
      </div>
    </div>
    <div className='note__body'>{body}</div>
  </div>
);
