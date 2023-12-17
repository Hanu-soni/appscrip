import React from 'react'

const recommend = () => {
    return (
        <section style={{border:"10px solid dark"}} className="bg-white border border-dark d-flex justify-content-between align-items-center vh-5 p-3">
          <span className="fw-bold" style={{ width: '10%' }}>
            3425 items
          </span>
          <span style={{ width: '80%' }}>Hide/Filter text</span>
          <div className="dropdown" style={{ width: '10%' }}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Recommended
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Watch
              </a>
              <a className="dropdown-item" href="#">
                Laptop
              </a>
              <a className="dropdown-item" href="#">
                Bags
              </a>
            </div>
          </div>
        </section>
      );
}

export default recommend