import React, { useState } from 'react'

const Login = ({RohanLogin}) => {
  
  const[a,b] = useState('');
  const[c,d] = useState('');
  
  const submit = (e) =>{
    e.preventDefault();
    RohanLogin(a,c);
    console.log("E-Mail is:",a);
    console.log("Password is:",c);
    b('');
    d('');
  }
  return (
    <div className='F'>
      <div className='F-Container'>
        <form 
        onSubmit={(e)=>{
          submit(e)
        }}
        className='F2'>
          <input 
          value={a}
          onChange={(e)=>{
            b(e.target.value);
          }}
          required type="email" placeholder='Enter Your E-Mail'/>
          <input 
          value={c}
          onChange={(e)=>{
            d(e.target.value);
          }}
          required type="password" placeholder='Enter Your Password'/>
          <button>Log in</button>
        </form>
      </div>
    </div>
  )
}
export default Login
