import React, { Component } from 'react';
import { NoteGallery } from './components/NoteGallery';
import * as utils from './utils';
import './App.scss';

class App extends Component {
  state = {
    notes: [],
    markdownText: 'bla bla',
    validId: 0,
  };

  componentDidMount() {
    const notes = utils.getDataFromStorage('notes') || [];
    let id = utils.getDataFromStorage('id');
    this.setState({ notes, validId: ++id });
  }

  addNote = e => {
    e.preventDefault();

    // should be util function
    let today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    today = `${day}-${month}-${year}`;

    const newNotes = [...this.state.notes];
    for (let note of newNotes) {
      note.editMode = false;
    }

    const note = {
      text: '',
      created: today,
      editMode: true,
      id: this.state.validId,
    };

    newNotes.unshift(note);
    this.setState(prevState => {
      return {
        notes: newNotes,
        markdownText: '',
        validId: ++prevState.validId,
      };
    });
    // comment for debug
    utils.updateStorage('notes', JSON.stringify(newNotes));
    utils.updateStorage('id', this.state.validId);
  };

  onNoteEdit = noteId => {
    const notes = utils.updateNoteData(this.state.notes, noteId, {
      editMode: true,
    });
    this.setState({ notes, markdownText: notes[noteId].text });
  };

  onNoteConfirmEdit = noteId => {
    const notes = utils.updateNoteData(this.state.notes, noteId, {
      text: this.state.markdownText,
    });
    utils.updateStorage('notes', JSON.stringify(notes));
    this.setState({ notes, markdownText: '' });
  };

  updateNoteText = e => {
    this.setState({ markdownText: e.target.value });
  };

  render() {
    return (
      <div className='main'>
        <header className='main__header'>
          <h1 className='main__heading'>React Markdown Note App</h1>
          <span className='main__logo-btn' onClick={this.addNote}>
            +
          </span>
        </header>
        <NoteGallery
          notes={this.state.notes}
          edit={this.onNoteEdit}
          textToUpdate={this.state.markdownText}
          confirmEdit={this.onNoteConfirmEdit}
          updateText={this.updateNoteText}
        />
      </div>
    );
  }
}

export default App;
