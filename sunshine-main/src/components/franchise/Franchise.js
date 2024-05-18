import React from 'react'
import '../franchise/franchise.css'
import fran from "../images/fran.png"
const Franchise = () => {
  return (
    <div className="whole_wrapf">
      <div >
      <h2  className='mb-50 f-b'>Why Sunshine Franchise</h2>
      </div>


    <div className="wrap_franchise">
      
        <div className='franchise'>
     
      <div className="left_cont_franchise">
      <div className="first_part">
      <div className="cont_box">
            <p style={{color:"white"}}>Established in 2012 trained 2Lakh+ students</p>
        </div>
        <div className="cont_box">
            <p style={{color:"white"}}>Assured financial growth 
            of minimum 12 Lakhs
            </p>
        </div>
      </div>
        <div className="second_part">
        <div className="cont_box">
            <p style={{color:"white"}}>Program for all ages that enhances 21st 
            century skills</p>
        </div>
        <div className="cont_box">
            <p style={{color:"white"}}>Low Investment - ROI in 3 to 6 
            months - high Returns</p>
        </div>
        </div>
      </div>
      <div className="right_cont_franchise">
        <img src={fran} alt="image" className='whyfran'/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Franchise
