


import React from 'react'

const navbar = () => {
  return (
    <div className='d-flex justify-content-center'>
        <nav className="bg-light p-2">
        <div className="container">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#shop">Shop</a></li>
            <li className="nav-item"><a className="nav-link" href="#skill">Skill</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#shop">Stories</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
          </ul>
          <button className="btn d-lg-none">&#9776;</button>
        </div>
      </nav>
    </div>
  )
}

export default navbar
  