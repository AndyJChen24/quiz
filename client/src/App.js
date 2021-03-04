import './App.css';
import Api from './utils/Api';
import React, {useState} from 'react';

function App() {
  const [questions, setQuestions] = useState('');

  // get question from api call
  function getQuestions(event){
    event.preventDefault();
    Api.getQuestions()
      .then((res)=>{
        // put the data in state
        setQuestions(res.data)
        console.log(questions)
      })
  }
  return (
    <div className="App">
      <p>Quiz App</p>
      {/* on button press get random questions */}
      <button onClick={getQuestions}>Button</button>
      <form>
      {/* if there are questions, map out all the questions in the array of objects */}
      {questions && questions.map((question)=> (
        <div key={question.id}>
          <h3>{question.question}</h3>
          {/* if there are answers and there is an answer a - f display it */}
          <p> {question.answers && question.answers.answer_a}</p>
          <p> {question.answers && question.answers.answer_b}</p>
          <p> {question.answers && question.answers.answer_c}</p>
          <p> {question.answers && question.answers.answer_d}</p>
          <p> {question.answers && question.answers.answer_e}</p>
          <p> {question.answers && question.answers.answer_f}</p>

        </div>
        
      ))}
      </form>
    </div>
  );
}

export default App;
