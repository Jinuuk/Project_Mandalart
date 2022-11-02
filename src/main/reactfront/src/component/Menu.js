import {useNavigate} from 'react-router-dom'

function Menu(props){
  let navigate = useNavigate();

  return (
    <>
      <span className="siteName" onClick={()=>{navigate('/')}}>Mandalart</span>
      {
        props.loginState == false ?
        <div className="visitorMenu">
          <span onClick={()=>{navigate('/login')}}>로그인</span>
          <span onClick={()=>{navigate('/Join')}}>회원가입</span>
        </div>
        :
        <div className="visitorMenu">
          <span>나의 만다라트</span>
          <span>회원명</span>
        </div>
      }
    </>

  )
}

export default Menu;