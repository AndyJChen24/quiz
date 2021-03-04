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
      
      {/* if there are questions, map out all the questions in the array of objects */}
      {questions && questions.map((question)=> (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <form>
            {/* create a button for each answer avaible. The the radio button is created no matter what, so to solve this problem of empty answer with radio button. I created a class that forces the class name to be null if there is no answer*/}
            <input type="radio" name="answer" className={``+question.answers.answer_a} value={``+question.answers.answer_a}/> {question.answers && question.answers.answer_a} 
            <input type="radio" name="answer" className={``+question.answers.answer_b} value={``+question.answers.answer_b}/> {question.answers && question.answers.answer_b}
            <input type="radio" name="answer" className={``+question.answers.answer_c} value={``+question.answers.answer_c}/> {question.answers && question.answers.answer_c}
            <input type="radio" name="answer" className={``+question.answers.answer_d} value={``+question.answers.answer_d}/> {question.answers && question.answers.answer_d}
            <input type="radio" name="answer" className={``+question.answers.answer_e} value={``+question.answers.answer_e}/> {question.answers && question.answers.answer_e}
            <input type="radio" name="answer" className={``+question.answers.answer_f} value={``+question.answers.answer_f}/> {question.answers && question.answers.answer_f}
          </form>
        </div>
        
      ))}
      
    </div>
  );
}

export default App;
