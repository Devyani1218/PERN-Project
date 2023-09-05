import React, {Fragment} from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Editinputlist from './components/Editinputlist';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      <Editinputlist/>
      </div>
    </Fragment>
   
  );
}

export default App;
