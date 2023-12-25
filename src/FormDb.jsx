import React, { useEffect, useState } from 'react'
import './FormDb.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const FormDb = () => {

    const [data,setdata]=useState('')
    const [newdata,setnewdata]=useState([''])
    const [refresh,setrefresh]=useState(false)


    let handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
        console.log(data);

    let handlesubmit=async (e)=>{
        e.preventDefault()
        try{

          let response=await axios.post('http://localhost:4000/add',data)
          console.log(response,'res');
          if (response) {
            setrefresh(!refresh)
          }
          alert('Details Added')
        }
        catch(err){
          console.log(err.response.data);
          alert(err.response.data)
        }
    }

    let handleremove=async (id)=>{
     try{ 
      let response=await axios.delete(`http://localhost:4000/delete/${id}`)
      console.log(response);
      setrefresh(!refresh)
    }catch(err){
      console.log(err.message);
      alert(err.message)
    }
    }
  

    useEffect(()=>{

      let fetchdata=async ()=>{
        let finded=await axios.get('http://localhost:4000/find')
        setnewdata(finded.data)
        console.log(finded.data,'newdata');
      }
      fetchdata()
    },[refresh])
  return (
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
            <input className='form-control' onChange={handlechange} type="text" name='username' id='state' placeholder='Enter your state...'/>
            <label htmlFor="state">Password</label><br />
            <input className='form-control' onChange={handlechange} type="text" name='password' id='state' placeholder='Enter your state...'/>
            <div className='text-center mt-5 container d-flex flex-wrap justify-content-center  gap-3'>
              {/* <input className='btn btn-danger' onClick={handleremove} type="button" value="Remove" /> */}
              <input className='btn btn-light'  type="submit" value="Submit" />
              </div>
        </form>
        
      </div>

      <div className='text-white w-50 m-auto mt-5 p-5 rounded-3 details'>
        <h2 className='text-center mb-5 '>List</h2>
        {newdata.map((item)=>(
          <div className=' rounded-3 p-3 mt-3 list'>
          <p>Name: {item?.Name}</p>
          <p>Age: {item?.Age}</p>
          <p>State: {item?.State}</p>
          <p>Username: {item?.username}</p>
          <p>Password: {item?.password}</p>
          <Link to={`/update/${item._id}`}><button className='btn btn-light'>Update</button></Link>
          <button className='btn btn-light ms-2' onClick={()=>handleremove(item._id)}>Delete</button>
          </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default FormDb
