import './App.css';
import Api from './utils/Api';
import React, {useState} from 'react';

function App() {
  const [questions, setQuestions] = useState('');

  function getQuestions(event){
    event.preventDefault();
    Api.getQuestions()
      .then((res)=>{
        setQuestions(res.data)
      })
  }
  return (
    <div className="App">
      <p>Quiz App</p>
      <button onClick={getQuestions}>Button</button>
    </div>
  );
}

export default App;
