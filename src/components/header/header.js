import React from 'react'

const header = () => {
  return (
    <div>
         <header className="bg-white p-3 d-flex justify-content-between align-items-center">
      <div className="logo">Logo</div>
      <h1 className="text-dark font-weight-bold">LOGO</h1>
      <div className="icons">
        <i className="bi bi-balloon-heart"></i>
        <i className="bi bi-house-door"></i>
        <i className="bi bi-person"></i>
      </div>
    </header>


    </div>
  )
}

export default header