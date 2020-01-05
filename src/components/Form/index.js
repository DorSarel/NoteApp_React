import React from 'react';
import './style.scss';

export const Form = () => (
  <form className='form'>
    <div className='form__inputs'>
      <input type='text' placeholder='Note title...' />
      <textarea></textarea>
    </div>

    <button className='form__btn'>Place a note</button>
  </form>
);
