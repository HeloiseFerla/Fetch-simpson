import './App.css';
import axios from 'axios';
import {useState} from 'react';
import Displayquote from './component/DisplayQuote';


function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setQuote(data[0]);
  
      })
  } ;
    
  
  
  return (
    <div className="App">
      <h1>The Simpson</h1>
      <button type="button" onClick={getQuote} >Get quote</button>
      <Displayquote quote = {quote}/>
    </div>
  );
};

export default App;
