import React, { Component } from 'react';
import { Form } from './components/Form';
import { NoteGallery } from './components/NoteGallery';
import './App.scss';

class App extends Component {
  state = {
    notes: [
      {
        title: 'First note',
        body: 'some random text to show',
      },
      {
        title: 'First note',
        body: 'some random text to show',
      },
      {
        title: 'First note',
        body: 'some random text to show',
      },
    ],
  };

  render() {
    return (
      <div className='main'>
        <Form />
        <NoteGallery notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
