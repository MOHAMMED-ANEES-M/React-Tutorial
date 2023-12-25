import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  
const {id}=useParams()
console.log(id,'id of movie');
const [data,setdata]=useState('')

useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=3e376686`)
        console.log(response.data);
        setdata(response.data)
    }
    fetchdata()
},[])

  return (
    <div>
      <h2>Title : {data.Title}</h2>
      <h2>Actors : {data.Actors}</h2>
      <h2> Director : {data.Director}</h2>
      <h2> Plot : {data.Plot}</h2>
      <h2> Language : {data.Language}</h2>
      <h2> Country : {data.Country}</h2>
    </div>
  )
}

export default Detail
