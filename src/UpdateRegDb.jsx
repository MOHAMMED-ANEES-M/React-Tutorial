import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateRegDb = () => {

    let {id}=useParams()

    const [data,setdata]=useState('')
    const navigate=useNavigate()

    let handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    let handlesubmit=async (e)=>{
        e.preventDefault()
        let response=await axios.put(`http://localhost:5000/update/${id}`,data)
        console.log(response);
        alert('Details updated')
        navigate('/listDb')
    }


  return (
    <div>
          <div className='container-fluid d-flex flex-wrap text-white rounded-3 survey w-25 mt-5 '>
       <div className='container w-100 m-auto mt-5  p-5 '>
        <h5 className='text-center mb-5'>Enter to update details</h5>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="name">Name</label><br />
            <input className='form-control ' onChange={handlechange} type="text" name='Name' id='name' placeholder='Enter your name...'/>
            <label htmlFor="age">Age</label><br />
            <input className='form-control ' onChange={handlechange} type="text" name='Age' id='age' placeholder='Enter your age...'/>
            <label htmlFor="state">State</label><br />
            <input className='form-control' onChange={handlechange} type="text" name='State' id='state' placeholder='Enter your state...'/>
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

export default UpdateRegDb
