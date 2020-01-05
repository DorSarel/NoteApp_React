import React, { Component } from 'react';
import { Form } from './components/Form';
import './App.scss';

class App extends Component {
  state = {
    notes: [],
  };

  render() {
    return (
      <div className='main'>
        <Form />
        <div className='main__gallery'>bdbsdbd</div>
      </div>
    );
  }
}

export default App;
