import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const [data,setdata]=useState('')
    const navigate=useNavigate()


    let handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
        
    let handlesubmit=async (e)=>{
        e.preventDefault()
        try{

          let response=await axios.post('http://localhost:5000/add',data)
          console.log(response,'res');
          if(response){
            alert('Registered')
            navigate('/LoginPage')
          }
        }
        catch(err){
          console.log(err.response.data);
          alert(err.response.data)
        }
    }
  return (
    <div>
      
      <div>
      <h1 className='text-center text-white p-5 fw-bolder mainhead '>SURVEY</h1>
    <div className='container-fluid d-flex flex-wrap'>
      <div className='container w-25 m-auto mt-5 p-5 text-white rounded-3 survey'>
        <h5 className='text-center mb-5'>Enter the details</h5>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="name">Name</label><br />
            <input className='form-control ' onChange={handlechange} type="text" name='Name' id='name' placeholder='Enter your name...'/>
            <label htmlFor="age">Age</label><br />
            <input className='form-control ' onChange={handlechange} type="text" name='Age' id='age' placeholder='Enter your age...'/>
            <label htmlFor="state">State</label><br />
            <input className='form-control' onChange={handlechange} type="text" name='State' id='state' placeholder='Enter your state...'/>
            <label htmlFor="state">Username</label><br />
            <input className='form-control' onChange={handlechange} type="text" name='username' id='state' placeholder='Enter username'/>
            <label htmlFor="state">Password</label><br />
            <input className='form-control' onChange={handlechange} type="password" name='password' id='state' placeholder='Enter password'/>
            <div className='text-center mt-5 container d-flex flex-wrap justify-content-center  gap-3'>
              {/* <input className='btn btn-danger' onClick={handleremove} type="button" value="Remove" /> */}
              <input className='btn btn-light'  type="submit" value="Submit" />
              </div>
        </form>
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default RegisterPage
