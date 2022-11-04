function Login(){
  return (
    <form className = "loginForm" action="">
    <h2>로그인</h2>
    <div>
      <input placeholder="이메일 주소"  type="text" />
    </div>
    <div>
      <input placeholder="비밀번호" type="password" />
    </div>
    <div>
      <button>로그인</button>
    </div>
    <div className="otherLink">
      <span>비밀번호 찾기</span>
      <span>회원가입</span>
    </div>
  </form>
  )
}

export default Login;