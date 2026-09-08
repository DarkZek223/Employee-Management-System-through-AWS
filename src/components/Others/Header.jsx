import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = ({data,changeUser}) => {
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','');
    changeUser('');
    //window.location.reload();
  }
  return (
      <div className='H'>
        <h1 className='H1'>Hello <br/> <span className='N'>{data ? data.firstName : 'Admin'} 👋</span></h1>
        <button onClick={logOutUser}>Log Out</button>
      </div>
  )
}

export default Header
