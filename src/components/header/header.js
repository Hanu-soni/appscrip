import React from 'react'

const header = () => {
  return (
    <div>
         <header className="bg-white p-3 d-flex justify-content-between align-items-center">
      <div className="logo">Logo</div>
      <h1 className="text-dark font-weight-bold">LOGO</h1>
      <div className="icons d-flex gap-2">
        <button style={{border:"none"}}><i className="bi bi-balloon-heart"></i></button>
        <button style={{border:"none"}}><i className="bi bi-house-door"></i></button>
        <button style={{border:"none"}}><i className="bi bi-person"></i></button>
      </div>
    </header>


    </div>
  )
}

export default header