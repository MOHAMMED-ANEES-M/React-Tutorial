import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [value1,setvalue1]=useState()
    const [value2,setvalue2]=useState()

    const sum=useMemo(()=>{
        return value1+value2
    },[value1,value2])

    let handlevalue1=(e)=>{
        setvalue1(parseInt(e.target.value))
    }

    let handlevalue2=(e)=>{
        setvalue2(parseInt(e.target.value))
    }

  return (
    <div>
      <input type="number" onChange={handlevalue1} placeholder='Enter first number'/>
      <input type="number" onChange={handlevalue2} placeholder='Enter second number'/>
      <p>Sum of {value1} and {value2} is {sum}</p>
    </div>
  )
}

export default Memo
