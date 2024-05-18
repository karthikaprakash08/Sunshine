import React, { useState } from 'react';
import './toggle.css';
import icon1 from "../Team/images/mind math senior.png"
import icon2 from "../Team/images/mind math junior.png"
import icon3 from "../Team/images/robtics.png"





const Toggle = () => {
  const [selectedContent, setSelectedContent] = useState(
    <>
       <div className="cont">
      <div className="conte">
      <p><span className='span'>Program Level: </span>6 levels, Each levels 3 months, Total Duration Approx 2 years</p>
      <p><span className='span'>Classes: </span>Weekly One day - 2 hrs & Optional class - Weekly 1hr</p>
      <p><span className='span'>Age Group: </span>3-5 years above.</p>
   
      <div className='benefit'>
      <span className='span'><b>Benefits:-</b></span>
      <div className='split'>
      <p>Logical Thinking, Improves Imagination, Analytical Thinking, Faster Calculations, Improves memory,
      Whole brain development, self confidence, Excellent Concentration.</p>
   
      <img src={icon1}/>
     </div>
      </div>
      </div>
      </div>
    </>
  );
  const [activeSection, setActiveSection] = useState('introduction');

  const handleSectionClick = (content, section) => {
    setSelectedContent(content);
    setActiveSection(section);
  };

  return (
    <>
    <div>
    <h4 style={{ paddingLeft: '180px', margin:'50px 0 30px 0',fontWeight:"700" }}>More details about all the <span style={{color:'#ff8360'}}>PROGRAMS</span></h4>
      {/* Display Selected Content */}
      <div className="content-container">
        <div className="content">
          {selectedContent}
        </div>
      </div>

      <div className="container-sections">
        <div
          className={`section ${activeSection === 'introduction' ? 'active' : ''}`}
          onClick={() => handleSectionClick(
            <>
            <div className="cont">
      <div className="conte">
      <p><span className='span'>Program Level: </span>6 levels, Each levels 3 months, Total Duration Approx 2 years</p>
      <p><span className='span'>Classes: </span>Weekly One day - 2 hrs & Optional class - Weekly 1hr</p>
      <p><span className='span'>Age Group: </span>3-5 years above.</p>
   
      <div className='benefit'>
      <span className='span1'>Benefits:-</span>
      <div className='split'>
   <p>Logical Thinking, Improves Imagination, Analytical Thinking, Faster 
    Calculations, Improves memory, Whole brain development, self confidence, 
    Excellent Concentration.</p>
   
      <img src={icon1}/>
     </div>
      </div>
      </div>
      </div>
            </>,
            'introduction'
          )}
        >
          <div className='head'>
        <h5 className='top'>MIND MATH JUNIOR PROGRAM</h5>
        <p className='paras'>Mind Math Junior Abacus is a scientifically developed & proven Program that improves the child's Memory, Concentration, Imagination & Creative thinking</p>
         </div>
        </div>
        <div
          className={`section ${activeSection === 'composition' ? 'active' : ''}`}
          onClick={() => handleSectionClick(
            <>
            <div className="cont">
      <div className="conte">
      <p><span className='span'>Program Level: </span>6 levels, Each levels 3 months, Total Duration Approx 2 years</p>
      <p><span className='span'>Classes: </span>Weekly One day - 2 hrs & Optional class - Weekly 1hr</p>
      <p><span className='span'>Age Group: </span>3-5 years above.</p>
   
      <div className='benefit'>
      <span className='span1'>Benefits:-</span>
      <div className='split'>
   <p>Maths Topper,  Develop Intelligence,  Faster Calculation,  Improves Memory,  Lateral Thinking, Improves self Confidence,
    Creativity, Great Mental Agility, Problem Solving Ability.</p>
   
      <img src={icon2}/>
     </div>
      </div>
      </div>
      </div>
            </>,
            'composition'
          )}
        >
          <div className='head'>
          <h5 className='top'>MIND MATH SENIOR PROGRAM</h5>
        <p className='paras'>Mind Math Senior is a Vedic Math's Program aimed at developing problem solving ability and mental arithmetic skills of the children aged 10 years and above. </p>
         </div>
        </div>
        <div
          className={`section ${activeSection === 'efficiency' ? 'active' : ''}`}
          onClick={() => handleSectionClick(
            <>
          <div className="cont">
      <div className="conte">
      <p><span className='span'>Program Level: </span>4 Levels. Each Level 3 months Total Duration 1 year.</p>
      <p><span className='span'>Classes: </span>weekly one day - 2hrs & Optional class -weekly 1hrs.</p>
      <p><span className='span'>Age Group: </span>10 years and above.</p>
   
      <div className='benefit'>
      <span className='span1'>Topics:-</span>
      <div className='split'>
   <p> <span style={{fontWeight:600}}>BASIC:</span> Electric,  Senssors Robot,  Coding. <br/> <span style={{fontWeight:600}}>INTERMEDIATE:</span>  Arduino Programming, Obstacle Bluetooth & mobile robot.<br/>
   <span style={{fontWeight:600}}>ADVANCED LEVEL:</span> Programming, IOT, DRONE.</p>
   
      <img src={icon3}/>
     </div>
      </div>
      </div>
      </div>
            </>,
            'efficiency'
          )}
        >
        <div className='head'>
        <h5 className='top'>ROBOTICS FUNDAMENTALS</h5>
        <p className='paras'>We use unique STEM Curriculum. While your child is having FUN creating robots,you will know that he or she is learning and understanding Science and technology.</p>
         </div>
    
             </div>
      </div>
    </div>
    
    

   
    </>
  );
};

export default Toggle;

