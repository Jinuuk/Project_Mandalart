function Join(){
  return (
    <form className="joinForm" action="">
      <ul>
        <li><h2>회원가입</h2></li>
        <li><label htmlFor="">이메일</label></li>
        <li><input type="email" /></li>
        <li><label htmlFor="">닉네임</label></li>
        <li><input type="text" /></li>
        <li><label htmlFor="">비밀번호</label></li>
        <li><input type="password" /></li>
        <li><label htmlFor="">비밀번호 확인</label></li>
        <li><input type="password" /></li>
        <li><button>회원가입</button></li>
      </ul>
  </form>
  )
}

export default Join;