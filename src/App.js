import React from 'react';

import './App.css';
import './components/formInput/FormInput.css';
import './components/note/Note.css';
import './components/noteRenew/NoteRenew.css';

import FormInput from './components/formInput/FormInput';
import Note from './components/note/Note';
import NoteRenew from './components/noteRenew/NoteRenew';

function App() {
  const data = [
    {
      id: 1,
      content: 'test sfsfd serser serser ser ser ser ser test sfsfd serser serser ser ser ser ser test sfsfd serser serser ser ser ser ser',
    },
    {
      id: 1,
      content: 'test sfsfd serser serser ser ser ser ser',
    },
    {
      id: 1,
      content: 'test sfsfd serser serser ser ser ser ser',
    },
    {
      id: 1,
      content: 'test sfsfd serser serser ser ser ser ser',
    }
  ]
  return (
    <div className="App">
      <NoteRenew></NoteRenew>
      <div className='notes-wrap'>
        <div className='notes-row'>
          {data.map((item) => {
            return  (
              <React.Fragment>
                <Note {...item}></Note>
              </React.Fragment>
            )
          })}
        </div>
      </div>
      
        <FormInput></FormInput>
     
    </div>
  );
}

export default App;
