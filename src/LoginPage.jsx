import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  // const [data,setdata]=useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()



    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    // let handlechange=(e)=>{
    //     setdata({...data,[e.target.name]:e.target.value})
    // }

    let handlesubmit=async (e)=>{
        e.preventDefault()
        console.log('submit');
        
        try{
          
          if (username !== '' && password !== '') {
            const data = { username, password }; // Combine username and password into an object
            console.log(data, 'data');

            let response=await axios.post('http://localhost:5000/login',data)
            console.log(response,'res');
            console.log(response.data.token);



            if(response.data.status){
              localStorage.setItem('token', response.data.token)
              console.log('success');
              alert('Login Success')
              navigate('/listDb')
            }
            else{
              console.log('failed');
              alert('incorrect username or password')
            }

          }
          else if(username === ''){
            alert('Username is Required')
          }else{
            alert('Password is required')
          }

          }catch(err){
          console.log(err.response.data);
          alert(err.response.data)
        }
    }

   
  return (

    
    <div>
      <h1 className='text-center text-white p-5 fw-bolder mainhead '>SURVEY</h1>
    <div className='container-fluid d-flex flex-wrap'>
      <div className='container w-25 m-auto mt-5 p-5 text-white rounded-3 survey'>
        <h5 className='text-center mb-5'>Enter the details</h5>
        <form action="" onSubmit={handlesubmit}>
           
            <label htmlFor="username">Username</label><br />
            <input className='form-control' onChange={handleUsernameChange} type="text" name='username' id='username' placeholder='Enter your username...'/>
            <label htmlFor="password">Password</label><br />
            <input className='form-control' onChange={handlePasswordChange} type="password" name='password' id='password' placeholder='Enter your password...'/>
            <div className='text-center mt-5 container d-flex flex-wrap justify-content-center  gap-3'>
              {/* <input className='btn btn-danger' onClick={handleremove} type="button" value="Remove" /> */}
              <input className='btn btn-light'  type="submit" value="Submit" />
              </div>
        </form>
    
      </div>
      </div>
      </div>

  )
}

export default LoginPage
