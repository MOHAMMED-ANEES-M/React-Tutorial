import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, json } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Fetch = () => {
    const[title,settitle]=useState()

    const [data,setdata]=useState([''])
    const [error,seterror]=useState()
    const [updateText,setupdatetext]=useState()



    let fetchdata=async ()=>{
        try{

            let response=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=3e376686`)
            console.log(response.data.Search);
            setdata(response.data.Search)
            if(response.data.Error){
                console.log(response.data.Error);
                seterror(response.data.Error)
               
            }
        }catch(err){
            console.log(err);
        }
    }

    const handleDelete = (id) => {
      const updatedData = data.filter((post) => post.imdbID !== id);
      setdata(updatedData);
      toast('Deleted successfully');
    };
  
    let handleUpdate=(id)=>{
      const updatedData=data.map((post)=>{
        if (post.imdbID===id) {
          return {...post, Title: updateText};
        }
        return post;
      })
      setdata(updatedData)
      setupdatetext('')
      toast('Updated successfully');
    }
   
let handleupdate=(e)=>{
setupdatetext(e.target.value)
}

let handlechange=(e)=>{
settitle(e.target.value)
fetchdata()
}
let handlesubmit=(e)=>{
    e.preventDefault()
    settitle(title)
    console.log(title);
    fetchdata()
}
console.log(data);
  return (
    <>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <div className='container m-auto w-75 mt-5 text-center text-white  bg-dark p-5 rounded '>
        <form onSubmit={handlesubmit}>

        <input className='rounded border-0  form-control ' type="text" onChange={handlechange} />
        <input className='btn btn-outline-light mt-3 ' type="submit" />

        </form>
    
        


 <div className='d-flex flex-wrap '>
  {data?.map((post) => (
    <div key={post.imdbID}>
      <Link to={`/detail/${post.imdbID}`}> <img className='w-75 rounded mt-5' src={post.Poster} alt="" /> </Link>
      <div className='w-75 m-auto'>
        {post?.Ratings?.map((item, index) => (
          <div key={index}>
            <p className='text-start ms-2'>{item.Value}</p>
            {/* Uncomment the next line if you want to display the Source */}
            {/* <h2>{item.Source}</h2> */}
          </div>
        ))}
        <h4 className='text-start ms-2'>{post.Title}</h4>
        <p className='text-start ms-2'>{post.Language}</p>
        {/* <p className='text-start ms-2'>{post.imdbID}</p> */}

          <input type="text" onChange={handleupdate} value={updateText} name=""  id=""/>
          <button onClick={() => handleUpdate(post.imdbID)}>Update</button>
          <button onClick={() => handleDelete(post.imdbID)}>Delete</button>
      </div>
    </div>
  ))}
</div>

     {error &&
<h2>{error}</h2>
}
    </div>
  </>
  )
}

export default Fetch
