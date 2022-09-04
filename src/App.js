import { throwStatement } from '@babel/types';
import React, { useState } from 'react';
import { Form } from './Form/Form';
import './App.css';


function App() {
  const [state, setState] = useState(1)
  return (
    <div className="App">
      <Form />
    </div>
  );
}



export default App;
