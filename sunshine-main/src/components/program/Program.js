import React from 'react'
// import scroll  from '../images/scroll.png'
import mathone  from '../images/math1.png'
import mathtwo  from '../images/math2.png'
import robo  from '../images/robo.png'
import { PiCalculatorDuotone } from "react-icons/pi";
// import { FaBrain } from "react-icons/fa6";
// import { RiRobot3Line } from "react-icons/ri";
import mind from '../images/mind.png'
import rob from '../images/rob.png'
import '../program/program.css'
const Program = () => {
  return (
   <>
    <div className='program_main'> 
     <div className="txts_hidden ">
     <h3 className='text-center cusfontfamily bolder'>
        Our Program
      </h3>
     </div>
      <div className="program_contents">
       <div className="programone text-center">
      <div className="twoimg">
      <img src={mathone} alt="large" className='programimg pro1' />
        {/* <i className='iconwrap'>
        <PiCalculatorDuotone className='colorchange'/>
        </i> */}
      </div>
        <h5 style={{fontFamily:"Crimson Text"}}><b>MIND MATH JUNIOR</b></h5>
        <p style={{fontFamily:"Crimson Text" , color:"rgba(83, 93, 105, 1)", fontWeight:"700"}}>Foundational skills for young learners</p>

       </div>
       <div className="programtwo  text-center">
     <div className="twoimg">
     <img src={mathtwo} alt="large" className='programimg pro2'/>
       {/* <i className='iconwrap'>
       <img src={mind} className='colorchange' height={22} />
       </i> */}
     </div>
        <h5 style={{fontFamily:"Crimson Text"}}><b>MIND MATH SENIOR</b></h5>
        <p style={{fontFamily:"Crimson Text" , color:"rgba(83, 93, 105, 1)", fontWeight:"700"}}>Complex challenges for advanced students</p>

       </div>
       <div className="programthree  text-center">
     <div className="twoimgg">
     <img src={robo} alt="large" className='programimg pro3' style={{height:"320px"}}/>
        {/* <i className='iconwrap'><img src={rob} className='colorchange' height={25} /></i> */}
     </div>
        <h5 style={{fontFamily:"Crimson Text"}}><b>ROBOTICS FUNDAMENTALS</b></h5>
        <p style={{fontFamily:"Crimson Text" , color:"rgba(83, 93, 105, 1)", fontWeight:"700"}}>Learning with real-world applications.</p>

       </div>
      </div>
      
    </div>

    <div className="number_value_cont">
        <div className="wrap_number">
          
        <h2 className='violett'><b>By The</b> <span className="violet"><b>Numbers</b></span></h2>
        <div className="numbers">
           <div className="left">
           <h1 className='cusnumber'>1.5k +</h1>
            <p className='fw'>students enrolled</p>
           </div>
           <div className="separator"></div>
           <div className="right">
           <h1 className='cusnumber'>98%</h1>
            <p className='fw'>parent satisfaction rate</p>
           </div>
        </div>
        </div>

    </div>
   </>
  )
}

export default Program
