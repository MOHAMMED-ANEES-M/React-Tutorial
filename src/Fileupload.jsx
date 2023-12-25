import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';


const Fileupload = () => {
    const [img,setimg]=useState()

  return (
    <div>
      <FileBase64
        // multiple={ true }
        onDone={ res=>console.log(setimg(res.base64)) } />
        
        {<img className='w-50 m-auto mt-5' src={img}></img>}

    </div>
  )
}

export default Fileupload
