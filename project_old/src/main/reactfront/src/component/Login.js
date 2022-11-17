import {useNavigate} from 'react-router-dom'

function Login(){
  let navigate = useNavigate();

  return (
    <form className = "inputForm" action="">
      <ul>
        <li><h2>로그인</h2></li>
        <li><input placeholder="이메일 주소"  type="text" /></li>
        <li><input placeholder="비밀번호" type="password" /></li>
        <li><button>로그인</button></li>
        <li className='otherLink'>
          <span onClick={()=>{navigate('/findPw')}}>비밀번호 찾기</span>
          <span onClick={()=>{navigate('/join')}}>회원가입</span>
        </li>
      </ul>
    </form>
  )
}

export default Login;