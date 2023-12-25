import { Alert } from 'react-bootstrap';
import React, { useState } from 'react'

const Yearvalidation = () => {

    const [year,setyear]=useState()
    const [validationresult,setvalidationresult]=useState()

   let handlechange=(e)=>{
        setyear(e.target.value)
    }

   let handlevalidation=(e)=>{
        e.preventDefault()
        if(year>=2003 && year<=2023){
           
            console.log("success");
            setvalidationresult("success")
        }else{

            console.log("failed");
            setvalidationresult("failed")
        }
    }

  return (
    <div>
      
        <>
            <div className="container">
                <form action="" onSubmit={handlevalidation}>
                <input type="number" onChange={handlechange} />
                <input type="submit" />
                </form>
            </div>

            {validationresult==='success' &&
                (<Alert className='w-50 mt-5 ms-5' variant='success'>Success</Alert>)
            }

            {validationresult==='failed' &&
                (<Alert className='w-50 mt-5 ms-5' variant='danger'>Failed</Alert>)
            }

        </>

    </div>
  )
}

export default Yearvalidation
