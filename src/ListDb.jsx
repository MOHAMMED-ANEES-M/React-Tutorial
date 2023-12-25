import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListDb = () => {

    const [newdata,setnewdata]=useState([''])
    const [refresh,setrefresh]=useState(false)

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
      <div className='text-white w-50 m-auto mt-5 p-5 rounded-3 details'>
        <h2 className='text-center mb-5 '>List</h2>
        {newdata.map((item)=>(
          <div className=' rounded-3 p-3 mt-3 list'>
          <p>Name: {item?.Name}</p>
          <p>Age: {item?.Age}</p>
          <p>State: {item?.State}</p>
          <p>Username: {item?.username}</p>
          <p>Password: {item?.password}</p>
          <Link to={`/updateDb/${item._id}`}><button className='btn btn-light'>Update</button></Link>
          <button className='btn btn-light ms-2' onClick={()=>handleremove(item._id)}>Delete</button>
          </div>
        ))}
    </div>
    </div>
  )
}

export default ListDb
