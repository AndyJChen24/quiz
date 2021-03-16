import './App.css';
import Api from './utils/Api';
import React, {useState} from 'react';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answerKey, setAnswers] = useState({})
  const [userAnswerKey, setUserAnswers] = useState({})
  const [currentAnswer, setCurrentAnswer] = useState({})
  const [data, setData] = useState()

  // get question from api call
  function getQuestions(event){
    event.preventDefault();
    Api.getQuestions()
      .then((res)=>{
        // put the data in state
        setData(res.data)
        
        res.data.forEach((element)=>{
          
          setQuestions((oldArr) => [...oldArr, element.question])
        })
        console.log(res.data)
        
      })
  }

  function recordAnswers(event){
    const newAnswerKey = answerKey
    answerKey.push(event.target.value)
    setAnswers(answerKey + event.target.value)
    console.log(event.target.value)
    console.log(answerKey)
  }
  return (
    <div className="App">
      <p>Quiz App</p>
      {/* on button press get random questions */}
      <button onClick={getQuestions}>Button</button>
      
      {/* if there are questions, map out all the questions in the array of objects */}
      {data && data.map((question)=> (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <form>

            {question.answerArray && question.answerArray.map((answer, index)=> (
              <div key={index}>
                <input name={question.question} type="radio" value={answer.answerValue} onChange={recordAnswers}/>{answer.answerValue}
              </div>
            ))}
          </form>
        </div>
        
      ))}
      
    </div>
  );
}

export default App;
