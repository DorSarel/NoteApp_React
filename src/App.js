import React, { Component } from 'react';
import { Form } from './components/Form';
import { NoteGallery } from './components/NoteGallery';
import * as utils from './utils';
import './App.scss';

class App extends Component {
  state = {
    notes: [],
    title: '',
    body: '',
  };

  onInputChangeHandler = e => {
    const noteTitle = e.target.value;
    this.setState({ title: noteTitle });
  };

  onTextChangeHandler = e => {
    const noteBody = e.target.value;
    this.setState({ body: noteBody });
  };

  addNote = e => {
    e.preventDefault();
    if (!utils.validateData(this.state.title, this.state.body)) {
      alert('Your`e missing data. at least one of the inputs is empty');
      return;
    }

    const note = {
      title: this.state.title,
      body: this.state.body,
      id: utils.generateId(),
    };
    const newNotes = [note, ...this.state.notes];
    this.setState({ notes: newNotes, title: '', body: '' });
  };

  deleteNote = noteId => {
    if (this.state.notes.length <= 0) {
      return;
    }

    const notes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes });
  };

  render() {
    return (
      <div className='main'>
        <Form
          title={this.state.title}
          body={this.state.body}
          changeInput={this.onInputChangeHandler}
          changeText={this.onTextChangeHandler}
          addNote={this.addNote}
        />
        <NoteGallery notes={this.state.notes} deleteNote={this.deleteNote} />
      </div>
    );
  }
}

export default App;
