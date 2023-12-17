import React, { Profiler } from 'react';
import logo from '../../images/Others/Logo.png';
import heart from '../../images/Others/heart.png';
import shop from '../../images/Others/shopping-bag.png';
import user from '../../images/Others/profile.png';

const header = () => {
  return (
    <div>
      <header className="bg-white p-3 d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-dark font-weight-bold">LOGO</h1>
        <div className="icons d-flex gap-2">
          <select className='text-dark fw-bold border border-white'>
            <option value="eng">ENG</option>
            <option value="hindi">Hindi</option>
            <option value="assamese">Assamese</option>
          </select>

          <button style={{ border: "none", backgroundColor: "white" }}><img src={heart} className="bi bi-balloon-heart" alt="no img" /></button>
          <button style={{ border: "none", backgroundColor: "white" }}><img src={shop} className="bi bi-house-door" alt="no img" /></button>
          <button style={{ border: "none", backgroundColor: "white" }}><img src={user} className="bi bi-person" alt="no img" /></button>
        </div>
      </header>


    </div>
  )
}

export default header