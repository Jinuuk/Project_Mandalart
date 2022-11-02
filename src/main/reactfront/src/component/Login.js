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
      <a href="">비밀번호 찾기</a>
      <a href="">회원가입</a>
    </div>
  </form>
  )
}

export default Login;