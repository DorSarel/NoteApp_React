import React from 'react';
import './style.scss';

export const Note = ({ title, body }) => (
  <div className='note'>
    <div className='note__header'>{title}</div>
    <div className='note__body'>{body}</div>
  </div>
);
