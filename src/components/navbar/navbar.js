


import React from 'react'

const navbar = () => {
  return (
    <div className='d-flex justify-content-center'>
        <nav className="bg-white p-2">
        <div>
          <ul  className="nav fw-bold">
            <li className="nav-item"><a style={{color:"black"}} className="nav-link" href="#shop">SHOP</a></li>
            <li className="nav-item"><a style={{color:"black"}} className="nav-link" href="#skill">SKILLS</a></li>
            <li className="nav-item"><a style={{color:"black"}} className="nav-link" href="#stories">STORIES</a></li>
            <li className="nav-item"><a style={{color:"black"}} className="nav-link" href="#about">ABOUT</a></li>
            <li className="nav-item"><a style={{color:"black"}} className="nav-link" href="#contact">CONTACT US</a></li>
          </ul>
          <hr  style={{width:"100%"}}></hr>
          <button className="btn d-lg-none">&#9776;</button>
        </div>
      </nav>
    </div>
  )
}

export default navbar
  