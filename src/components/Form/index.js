import React from 'react';
import './style.scss';

export const Form = ({ title, body, changeInput, changeText, addNote }) => (
  <form className='form'>
    <div className='form__inputs'>
      <input
        type='text'
        placeholder='Note title...'
        value={title}
        onChange={changeInput}
      />
      <textarea value={body} onChange={changeText}></textarea>
    </div>

    <button className='form__btn' onClick={addNote}>
      Place a note
    </button>
  </form>
);
