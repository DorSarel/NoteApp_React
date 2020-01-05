import React, { Component } from 'react';
import { Form } from './components/Form';
import { Note } from './components/Note';
import './App.scss';

class App extends Component {
  state = {
    notes: [],
  };

  render() {
    return (
      <div className='main'>
        <Form />
        <Note />
      </div>
    );
  }
}

export default App;
