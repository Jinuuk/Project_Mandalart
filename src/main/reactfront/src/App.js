import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  let [message, setMessage] = useState('');

  useEffect(()=>{
    axios.get('/hello')
         .then(res=>{
            console.log(res.data);
            setMessage(res.data);
         })
         .catch(()=>console.log('실패'))
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
