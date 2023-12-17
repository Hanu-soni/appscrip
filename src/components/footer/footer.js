import React from 'react';
import { leftItems,midItems,contact,transaction } from './data';
import insta from '../../images/Others/Insta.png';
import linked from '../../images/Others/mdi_linkedin.png';
import './footer.css';


const FollowButton = ({ icon }) => (
  <button className="btn  mr-2">
    <img src={icon} alt="no img" style={{color:"black"}}></img>
  </button>
);

const Component6 = () => {
  // Array of items for left, mid, and right sections
 

  return (
    <section id="contact"  className="bg-black text-white vh-40 p-3 ">
      <div style={{marginTop:"3rem",marginLeft:"7rem"}}>
      <div  className="h-50 d-flex gap-4 footer-1 fontreq">
        {/* Left Section in Top */}
        <div className="w-50">
          <div className="h-100 d-flex flex-column justify-content-between">
            <div>
              <h4>BE THE FIRST TO KNOW</h4>
              <p>Sign up for updates</p>
            </div>
            <div className="d-flex  gap-2 columnreq">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Enter your email"
                style={{ width: '60%' }}
              />
              <button
                className="btn btn-dark text-light"
                style={{ width: '40%', border: '1px solid light', color: 'light', background: 'dark' }}
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
      </div>
      <br></br>
      <div style={{border:"solid 2px white",width:"80vW",justifyContent:"center",display:"flex",margin:"auto"}}></div>
      <div style={{marginTop:"3rem",marginLeft:"7rem"}}>
      <div style={{height:"400px"}} className="h-50 d-flex footer-1">
        {/* Left Section in Bottom */}
        <div className="w-50">
          {leftItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* Mid Section in Bottom */}
        <div className="w-50 d-flex flex-column gap-2">
          {midItems.map((item, index) => (
            <button style={{background:"black",color:"white",width:"12rem",border:"none"}} key={index} >
            {item}
          </button>
          ))}
        </div>

        {/* Right Section in Bottom */}
        <div className="w-50 d-flex flex-column justify-content-between">
          <div>
            <p>FOLLOW US</p>
            <div className="d-flex gap-2">
              <FollowButton icon={insta} />
              <FollowButton icon={linked} />
            </div>
          </div>
          <div>
            <p>appsrip ACCEPTS</p>
            <div className="d-flex gap-2">
              {transaction.map( (item, index) => (
                <button key={index} className="btn btn-light mr-2">
                  <img src={item} className='img-fluid' alt="no img"/>
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
