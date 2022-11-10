import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Menu(props){
  let navigate = useNavigate();
  let [submenu,setSubmenu] = useState(false);

  return (
    <>
      <span className="siteName" onClick={()=>{navigate('/')}}>Mandalart</span>
      {
        props.loginState == false ?
        <div className="visitorMenu">
          <span onClick={()=>{navigate('/login')}}>로그인</span>
          <span onClick={()=>{navigate('/join')}}>회원가입</span>
        </div>
        :
        <div className="visitorMenu">
          <span onClick={()=>{setSubmenu(!submenu)}}>누구누구님</span>
          {
            submenu == true ?
            <ul className='submenuBox'>
              <li onClick={()=>{
                navigate('/myMandalart');
                setSubmenu(!submenu);
              }}>나의 만다라트</li>
              <li onClick={()=>{
                navigate('/myPage');
                setSubmenu(!submenu);
                }}>회원정보 수정</li>
              <li onClick={()=>{
                setSubmenu(!submenu)
              }}>로그아웃</li>
            </ul>
            :
            null
          }
        </div>
      }
    </>

  )
}

export default Menu;