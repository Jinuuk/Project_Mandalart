function MyPage(){
  return (
    <form className = "inputForm" action="">
      <h2>회원정보 수정</h2>
      <div>
        <input placeholder="비밀번호" type="password" />
      </div>
      <div>
        <button>회원정보 수정</button>
      </div>
    </form>
  )
}

export default MyPage;