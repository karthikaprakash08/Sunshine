import React from 'react'
import '../franchise/franchise.css'
import fran from "../images/whyfran.jpg"

const Franchise = () => {
  return (
    <div className="whole_wrapf">
      <div className="wrap_franchise">
          <div className="content_box">
            <h2 className='title'>Why Sunshine Franchise</h2>
            <p style={{fontSize:"20px", fontWeight:"400", textAlign:"justify"}}>Established in 2012, our institution has trained over 200,000 students, offering programs for all ages that enhance 21st-century skills. We assure a minimum financial growth of 12 lakhs with a low investment, providing a return on investment (ROI) within 3 to 6 months and promising high returns.</p>
          </div>
        <div className="right_cont_franchise">
          <img src={fran} alt="Franchise" className='whyfran'/>
        </div>
      </div>
    </div>
  )
}

export default Franchise
