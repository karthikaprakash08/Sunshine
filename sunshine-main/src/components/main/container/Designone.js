import React from 'react'
import '../container/design.css'
import { FaSchool } from "react-icons/fa6";
const Designone = () => {
  return (
    <div>
      <div className="designpart">
        <i><FaSchool style={{fontSize:'20px'}}/></i>
          <h5 className='gradientcolor' style={{fontWeight:'600'}}>Established 2012</h5>
           <p>Trained 2 lakh+ students</p>
      </div>
    </div>
  )
}

export default Designone
