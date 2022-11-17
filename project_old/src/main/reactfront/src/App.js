import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './component/Menu.js'
import Login from './component/Login.js'
import Join from './component/Join.js'
import Intro from './component/Intro.js'
import FindPw from './component/FindPw.js'
import MyPage from './component/MyPage.js'
import MyMandalart from './component/MyMandalart'

function App() {
  let [message, setMessage] = useState('');
  let [loginState,setLoginState] = useState(true);

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
      <header>
        <nav className='menuBar'>
          <Menu loginState={loginState}/>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/join" element={<Join/>} />
          <Route path="/findPw" element={<FindPw/>} />
          <Route path="/myPage" element={<MyPage/>} />
          <Route path="/myMandalart" element={<MyMandalart/>} />
        </Routes>
      </main>
      {/* <footer>푸터</footer> */}
    </div>
  );
}



export default App;
