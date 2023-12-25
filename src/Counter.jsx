import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count,setcount]=useState(0)
    const [name,setname]=useState(false)
    const [odd,setodd]=useState()
    const [ok,setok]=useState(false)
    

    let increment=()=>{
        setcount(count+1)
        setodd(!odd)
    }

    let decrement=()=>{
        if(!count==0){
            setcount(count-1)
            setodd(!odd)
        }
    }

    let viewname=()=>{
        setname(!name)
    }

    let view=()=>{
        setok(!ok)
    }

    useEffect(() => {
      console.log('on mount');
    }, []);

    useEffect(()=>{
      return()=>{
        console.log('unmount');
      }
    },[])

    useEffect(()=>{
      console.log(count);
    },[count])
    
        
  return (
    <div className='m-5'>
        <h1 className='m-5'> {odd? 
        <h1>Odd</h1>
        : 
        <h1>Even</h1>
        } {count}</h1>
      <button className='btn-secondary btn ' onClick={increment}>+</button>
      <button className='ms-5 btn btn-secondary  ' onClick={decrement}>-</button>
      <button className='ms-5 btn btn-primary ' onClick={viewname}>Click</button>
      <button className='ms-5 btn btn-success '  onClick={view}>OK</button>
      

        {/* conditional rendering */}
      { name ?
      <h1 className='ms-5'>hello</h1>
      : 
      <h1 className='ms-5'>Welcome</h1>
      }

      { ok &&
        <h1 >OK</h1>
      }
    
      

    </div>
  )
}

export default Counter
