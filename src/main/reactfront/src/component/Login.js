import {useNavigate} from 'react-router-dom'

function Login(){
  let navigate = useNavigate();

  return (
    <form className = "inputForm" action="">
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
        <span onClick={()=>{navigate('/findPw')}}>비밀번호 찾기</span>
        <span onClick={()=>{navigate('/join')}}>회원가입</span>
      </div>
    </form>
  )
}

export default Login;