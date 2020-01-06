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
    editMode: false,
    editNoteId: -1,
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
    if (this.state.notes.length <= 0 || this.state.editMode) {
      return;
    }

    const notes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes });
  };

  editNote = noteId => {
    if (this.state.editMode) {
      alert('already in edit mode. Save note first');
      return;
    }
    const noteToEdit = this.state.notes.find(note => note.id === noteId);
    const { title, body } = noteToEdit;
    this.setState({ title, body, editMode: true, editNoteId: noteId });
  };

  updateNote = e => {
    e.preventDefault();
    if (!utils.validateData(this.state.title, this.state.body)) {
      alert('Your`e missing data. at least one of the inputs is empty');
      return;
    }

    const notes = [...this.state.notes];
    const noteIdx = notes.findIndex(note => note.id === this.state.editNoteId);
    const noteToEdit = {
      ...notes[noteIdx],
      title: this.state.title,
      body: this.state.body,
    };
    notes.splice(noteIdx, 1, noteToEdit);
    this.setState({
      notes,
      editMode: false,
      editNoteId: -1,
      title: '',
      body: '',
    });
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
          isEdit={this.state.editMode}
          updateNote={this.updateNote}
        />
        <NoteGallery
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          editNote={this.editNote}
        />
      </div>
    );
  }
}

export default App;
