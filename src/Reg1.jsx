import React, { useState } from 'react'

const Reg1 = () => {
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
    // const [newuser,setnewuser]=useState()
    // const [newpass,setnewpass]=useState()

    let handleusername=(e)=>{
        setusername(e.target.value)
        console.log(username);
    }

    let handlepassword=(e)=>{
        setpassword(e.target.value)
        console.log(password);
    }

    let handlesubmit=(e)=>{
        e.preventDefault()
        setusername(username)
        setpassword(password)
        console.log(username,password);
    }
  return (
    <>
    <div className=' p-5 m-auto w-50 rounded-5 mt-5 shadow  '>
      <h1 className='text-center mb-5'>Survey</h1>
      
        <form onSubmit={handlesubmit}>
          <label className='fs-6 me-3 ' htmlFor="user">Username </label><br />
      <input type="text" onChange={handleusername} placeholder='username' name="username" id="user" className='border-2 w-50 form-control '/><br />
      <label className='fs-6 me-3 ' htmlFor="pass">Password </label><br />
      <input type="password" onChange={handlepassword} placeholder='password' name="password" id="pass" className='border-2 w-50 form-control ' /><br />
      <input className='btn btn-secondary ' type="submit" name="" id="" />
        </form>
        
    </div>
    <div className='mt-5 text-center'>
      <h3>username: {username}</h3>
        <h3>password: {password}</h3>
    </div>
    </>       
  )
}

export default Reg1
