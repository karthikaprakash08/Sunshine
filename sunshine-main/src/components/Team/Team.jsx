import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Team/images/scl-1.png';
import img2 from '../Team/images/scl-2.png';
import img3 from '../Team/images/scl-3.png';
import img4 from '../Team/images/scl-4.png';
import img5 from '../Team/images/scl-5.png';
import img6 from '../Team/images/scl-9.png';
import img7 from '../Team/images/scl-7.jpg';
import img8 from '../Team/images/sch-10.png';
import './Team.css';

const images = [
  { src: img1, alt: 'Course 1' },
  { src: img2, alt: 'Course 2' },
  { src: img3, alt: 'Course 3' },
  { src: img4, alt: 'Course 4' },
  { src: img5, alt: 'Course 5' },
  { src: img6, alt: 'Course 6' },
  { src: img7, alt: 'Course 7' },
  { src: img8, alt: 'Course 8' },
];

function Team() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear', 
    autoplaySpeed: 0,
    arrows: false,
  };

  return (
    <div className="team" style={{ paddingBottom: "50px" }}>
      <div className="row">
        <div className="col-12 classroom">
          <h4 style={{ textAlign:'center', color: "#ffffff", fontWeight: 700,fontSize:"24px", marginTop:'-30px',marginBottom:'50px' }}>Schools Associated With Us</h4>
        </div>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='team-member' key={index}>
            <img 
              src={image.src} 
              alt={image.alt} 
              style={{ 
                width: '200px', 
                height: '200px', 
                borderRadius: '20px' 
              }} 
            />
        
          </div>
          
          
        ))}
      </Slider>

      <p className='para' style={{ fontWeight: 600, fontSize:"20px", color: '#ffffff', textAlign: 'center', marginTop:'60px'  }}>
        "Partnering with schools for excellence in education and growth"
      </p>
    </div>
  );
}

export default Team;
