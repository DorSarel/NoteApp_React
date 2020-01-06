import React from 'react';
import './style.scss';

export const Form = ({
  title,
  body,
  changeInput,
  changeText,
  addNote,
  isEdit,
  updateNote,
}) => {
  let button = (
    <button className='form__btn' onClick={addNote}>
      Place a note
    </button>
  );
  if (isEdit) {
    button = (
      <button className='form__btn' onClick={updateNote}>
        Update note
      </button>
    );
  }
  return (
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

      {button}
    </form>
  );
};
