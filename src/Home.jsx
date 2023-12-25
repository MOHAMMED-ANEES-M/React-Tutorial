import React from 'react'

const Home = (props) => {
  return (
    <>
    <div className={props.class}>
      <span>{props.title}</span>
      <span>{props.body}</span>
    </div>
    
    </>
  )
}

export default Home
