function Join(){
  return (
    <form className="joinForm" action="">
      <h2>회원가입</h2>
      <label htmlFor="">이메일</label>
      <input type="email" />
      <label htmlFor="">닉네임</label>
      <input type="text" />
      <label htmlFor="">비밀번호</label>
      <input type="password" />
      <label htmlFor="">비밀번호 확인</label>
      <input type="password" />
      <button>회원가입</button>
  </form>
  )
}

export default Join;