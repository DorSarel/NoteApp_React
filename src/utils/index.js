import _ from 'lodash';

export const updateNoteData = (oldNotes, noteId, payload) => {
  const notes = _.cloneDeep(oldNotes);
  const noteIndex = notes.findIndex(note => note.id === noteId);

  if (noteIndex < 0) {
    alert('Got wrong note ID');
    return;
  }

  for (let note of notes) {
    note.editMode = false;
  }

  let noteToEdit = notes[noteIndex];
  for (let key in payload) {
    noteToEdit[key] = payload[key];
  }

  return notes;
};

export const validateData = (title, body) => {
  return title !== '' && body !== '';
};

export const updateStorage = (key, stringValue) => {
  localStorage.setItem(key, stringValue);
};

export const getDataFromStorage = key => {
  if (key === 'notes') {
    return getObjectFromStorage(key);
  } else {
    return getNumberFromStorage(key);
  }
};

const getObjectFromStorage = key => {
  return JSON.parse(localStorage.getItem(key), '[]');
};

const getNumberFromStorage = key => {
  const data = localStorage.getItem(key);
  if (!isNaN(data)) {
    return data;
  }
  return 0;
};
