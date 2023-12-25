import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, update } from './CounterSlice'

const Count = () => {

    let count = useSelector((state=>state.counter.value))
    let data = useSelector((state=>state.counter.data))

    let dispatch=useDispatch()

    let decrements=()=>{
        console.log('sfsd')
        if (count!==0) {
            dispatch(decrement())
        }
    }

    let person = [{
        name : 'asd', age : 20
    },{
        name : 'dus', age : 22
    },{
        name : 'bcj', age : 25
    }]

    let updates=()=>{
        dispatch(update(person))
        console.log('jdch');
    }
console.log(data);
  return (
    <div>
       { data?.map((item,index)=>(
            <div>
            <h2>{index}</h2>
            <h2>{item.name}</h2>
            <h2>{item.age}</h2>
            </div>
        ))}
    
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={decrements}>-</button>
      <button onClick={updates}>update</button>
    </div>
    </div>
  )
}

export default Count
