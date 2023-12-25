import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

const Fetch1 = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(response=>setdata(response))
        .catch(error => console.error('Error:', error));
    })

  return (
    <div>
      {data.map((item)=>(
        <div>
        <h2>{item.userId}</h2>
        <h2>{item.id}</h2>
        <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Fetch1
