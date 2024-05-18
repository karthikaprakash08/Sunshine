import React from 'react'

import Team from '../Team/Team'

import Classroom from '../classrom/classrom'
import Navbar from '../Navbar/Navbar'
import Franchise from '../franchise/Franchise'
import Program from '../program/Program'

import Tablee from '../table/table'
import Toggle from '../Toggle/toggle'
import Footer from '../Footer/Footer'
import Mains from '../main/Mains'
import PopupModal from '../Modal/PopupModal'





export default function Main() {
  return (
    <>

    <PopupModal/>
  
<div>
<Navbar/>
 </div>


 <div>
<Mains/>
 </div>

 <div>
  <Program/>
 </div>


 <div>
  <Franchise/>
 </div>

    <div>
    <Classroom/>
    </div>

    <div>
     <Tablee/>
    </div>

      <div>
        <Toggle/>
      </div>
   
      <div>
        <Team/>
      </div>
    

    <div>
      <Footer/>
    </div>
   
    </>
  )
}
