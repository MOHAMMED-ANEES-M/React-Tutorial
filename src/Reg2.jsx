import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reg2 = () => {
    const [data,setdata]=useState()
    const [newdata,setnewdata]=useState()
    const navigate=useNavigate()

    let handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    let handlesubmit=(e)=>{
        e.preventDefault()
        setnewdata(data)
        navigate('/Reg1')
    }

    let handleremove=()=>{
        setnewdata('')
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={handlechange} placeholder='name' name="name" id="" />
        <input type="number" onChange={handlechange} placeholder='contact' name="contact" id="" />
        <input type="email" onChange={handlechange} placeholder='email' name="email" id="" />
        <input type="password" onChange={handlechange} placeholder='password' name="password" id="" />
        <input type="submit" name="" id="" /> 
      </form>
        <h3>name:{newdata?.name}</h3>
        <h3>contact:{newdata?.contact}</h3>
        <h3>email:{newdata?.email}</h3>
        <h3>password:{newdata?.password}</h3>
        <button onClick={handleremove}>Remove</button>
    </div>
  )
}

export default Reg2
