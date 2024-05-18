import React from "react";
import "./classrom.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vectorImage from "../classrom/assets/vector.png";
import image1 from "../classrom/assets/img1.png";
import image2 from "../classrom/assets/img2.png";
import image3 from "../classrom/assets/img3.png";
import image4 from "../classrom/assets/img4.png";
import image5 from "../classrom/assets/img5.png";
import courseImage1 from "../classrom/assets/class-1.png";
import courseImage2 from "../classrom/assets/class-2.png";
import courseImage3 from "../classrom/assets/class-3.png";
import courseImage4 from "../classrom/assets/class-4.png";
import courseImage5 from "../classrom/assets/class-5.png";
import courseImage6 from "../classrom/assets/class-6.png";

export default function Classroom() {
  const settings = {
    dots:false,
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
    <>
      <div  className="Sunshine-head" >
        <div className="row">
          <div className="col-md-6 ">
            <div className="custom-circle">
              <div className="center_circle22">
                <p>Sunshine <br/>Franchise</p>
              </div>
            </div>

            <div className="circle circle1">
              <img src={image1} alt="image1" className="circle_img" />
            </div>
             <div className="square square1">Technology</div>

            <div className="circle circle2">
              <img src={image2} alt="image1" className="circle_img" />
            </div>
            <div className="square square2">EVS & Science</div>

            <div className="circle circle3">
              <img src={image3} alt="image1" className="circle_img" />
            </div>
            <div className="square square3">Mind Arthematic</div>

            <div className="circle circle4">
              <img src={image4} alt="image1" className="circle_img" />
            </div>
            <div className="square square4">Communication</div>

            <div className="circle circle5">
              <img src={image5} alt="image1" className="circle_img" />
            </div>
            <div className="square square5">Skill Enchancement</div>
          </div>
          
          <div
            className="col-md-6 d-flex flex-column justify-content-center align-items-center pt-5 mt-5"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize:"30px",
            }}
          >
            <div style={{ alignItems: "start" }} className="">
              <p className="">
                Structure Using Academic
                <br />
                Learning Indicators
              </p>
            </div>
            <img src={vectorImage} alt="Vector Image" className="image1" />

            <div style={{ alignItems: "start" }} className="">
              <p className="" >
                Program, Training &  <br />
                Technology
              </p>
            </div>
            
          </div>
        </div>

  </div>
  </>
  );
}
