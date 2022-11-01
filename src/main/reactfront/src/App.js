import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  let [message, setMessage] = useState('');
  let [loginState,setLoginState] = useState(false);

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
          <span className="siteName">Mandalart</span>
          <Menu loginState={loginState}/>
        </nav>
      </header>
      <main>
        <Intro/>
        {/* 로그인, 회원가입은 라우터 사용 */}
        {/* <Login/> */}
        {/* <Join/> */}
      </main>
      <footer>푸터</footer>
    </div>
  );
}

function Menu(props){
    if(props.loginState == false){
      return (
        <div className="visitorMenu">
          <span>로그인</span>
          <span>회원가입</span>
        </div>
      )
    }
    return (
      <div className="visitorMenu">
        <span>나의 만다라트</span>
        <span>회원명</span>
      </div>
    )
}
function Intro() {
  return (
    <>
      <section>만다라트란?</section>
      <section>만다라트 소개</section>
      <section>만다라트 작성하기</section>
    </>
  )
}

function Login(){
  return (
    <form action="">
    <h2>로그인</h2>
    <div>
      <label htmlFor="">아이디</label><input type="text" />
    </div>
    <div>
      <label htmlFor="">비밀번호</label><input type="password" />
    </div>
    <div>
      <button>로그인</button>
    </div>
    <div>
      <a href="">아이디 / 비밀번호 찾기</a>
      <a href="">회원가입</a>
    </div>
  </form>
  )
}

function Join(){
  return (
    <form action="">
      <h2>회원가입</h2>
      <div>
        <label htmlFor="">이메일</label><input type="email" />
      </div>
      <div>
        <label htmlFor="">닉네임</label><input type="text" />
      </div>
      <div>
        <label htmlFor="">비밀번호</label><input type="password" />
      </div>
      <div>
        <label htmlFor="">비밀번호 확인</label><input type="password" />
      </div>
      <div>
        <button>회원가입</button>
      </div>
  </form>
  )
}

export default App;
