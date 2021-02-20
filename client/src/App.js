import './App.css';
import Api from './utils/Api';

function App() {


  


  return (
    <div className="App">
      <p>Quiz App</p>
      <button onClick={Api.getQuestions}>Button</button>
    </div>
  );
}

export default App;
