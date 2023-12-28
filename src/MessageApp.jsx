import axios from 'axios'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';


const socket = io('http://localhost:5000');


const MessageApp = () => {

    const [name,setName]=useState('')
    const [message,setMessage]=useState('')
    const [messages,setMessages]=useState([])
    
    let handleSubmit=async(e)=>{
        e.preventDefault();
        if(name && message !== ''){
            try{
                await axios.post('http://localhost:5000/api/message',{name,message});
                // setMessage('')
                // setName('')
            }catch(err){
                console.error('Error sending message:', err);
                alert('Error sending message:', err)
            }
        }
        else{
          console.log('no');
        }
    }

    useEffect(()=>{
        const handleMessage = (receivedMessage) => {
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
          };
      
          socket.on('message', handleMessage);
      
          return () => {
            socket.off('message', handleMessage);
          };
        }, []);
    

  return (
    <div>
        <div className='m-auto w-50 mt-5 text-center survey p-5 rounded-3 '>

        <div className='text-start text-white '>
        <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.name}: {msg.message}
          </li>
        ))}
      </ul>
        </div>

      <form onSubmit={handleSubmit}>
        <div className='d-flex gap-1 '>
      <input className='form-control w-25 m-auto  ' type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
      <input className='form-control w-75 m-auto ' type="text" placeholder='Type message here...' onChange={(e)=>setMessage(e.target.value)}/>
      <button className='btn btn-light '>Send</button>
        </div>
      </form>
        
        </div>

        
    </div>
  )
}

export default MessageApp
