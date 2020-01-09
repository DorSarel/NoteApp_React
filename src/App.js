import React, { Component } from 'react';
import { NoteGallery } from './components/NoteGallery';
import * as utils from './utils';
import './App.scss';

class App extends Component {
  state = {
    notes: [],
    validId: 0,
  };

  componentDidMount() {
    // const notes = utils.getDataFromStorage('notes') || [];
    // let id = utils.getDataFromStorage('id');
    // this.setState({ notes, validId: ++id });
  }

  addNote = e => {
    e.preventDefault();

    // should be util function
    let today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    today = `${day}-${month}-${year}`;

    const note = {
      text: '',
      created: today,
      edit: true,
      id: this.state.validId,
    };

    const newNotes = [note, ...this.state.notes];
    this.setState(prevState => {
      return {
        notes: newNotes,
        validId: ++prevState.validId,
      };
    });

    // comment for debug
    // utils.updateStorage('notes', JSON.stringify(newNotes));
    // utils.updateStorage('id', this.state.validId);
  };

  deleteNoteById = noteId => {
    const notes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes });
    utils.updateStorage('notes', JSON.stringify(notes));
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
        <NoteGallery notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
