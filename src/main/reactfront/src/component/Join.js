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

export default Join;