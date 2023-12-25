import React from 'react'
import './Bootsnav.css'

const Bootsnav = () => {
  return (
    <div>
      <ul class="nav justify-content-center text-decoration-none fixed-top flex-nowrap mt-3 ">
      <li class="nav-item ">
        <a class="nav-link" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
    </div>
  )
}

export default Bootsnav
