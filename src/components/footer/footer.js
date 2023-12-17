import React from 'react';
import { leftItems,midItems,contact,transaction } from './data';

const FollowButton = ({ icon }) => (
  <button className="btn btn-light mr-2">{icon}</button>
);

const Component6 = () => {
  // Array of items for left, mid, and right sections
 

  return (
    <section  className="bg-black text-white vh-30 p-3 ">
      <div style={{marginTop:"3rem",marginLeft:"7rem"}}>
      <div  className="h-40 d-flex">
        {/* Left Section in Top */}
        <div className="w-50">
          <div className="h-100 d-flex flex-column justify-content-between">
            <div>
              <h4>BE THE FIRST TO KNOW</h4>
              <p>Sign up for updates</p>
            </div>
            <div className="d-flex ms-4 gap-2">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Enter your email"
                style={{ width: '30%' }}
              />
              <button
                className="btn btn-dark text-light"
                style={{ width: '20%', border: '1px solid light', color: 'light', background: 'dark' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Right Section in Top */}
        <div className="w-50">
          {contact.map((item, index) => (
            <div key={index} className="mb-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="h-60 d-flex">
        {/* Left Section in Bottom */}
        <div className="w-25">
          {leftItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* Mid Section in Bottom */}
        <div className="w-25">
          {midItems.map((item, index) => (
            <button key={index} >
            {item}
          </button>
          ))}
        </div>

        {/* Right Section in Bottom */}
        <div className="w-50 d-flex flex-column justify-content-between">
          <div>
            <p>FOLLOW US</p>
            <div className="d-flex">
              <FollowButton icon="camera" />
              <FollowButton icon="linkedIn" />
            </div>
          </div>
          <div>
            <p>appsrip accept</p>
            <div className="d-flex">
              {transaction.map( (item, index) => (
                <button key={index} className="btn btn-light mr-2">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Component6;
