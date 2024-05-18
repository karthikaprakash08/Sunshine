import React from "react";
import "../main/main.css";
import { PiCalculatorDuotone } from "react-icons/pi";
import { FaRobot } from "react-icons/fa6";
import scroll from "../images/scroll.png";
import scroll2 from "../images/class-2.png";
import scroll3 from "../images/class-3.png";
import scroll4 from "../images/class-4.png";
import { TiGroup } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Designone from "./container/Designone";
import Designtwo from "./container/Designtwo";
import Designthree from "./container/Designthree";
import com from '../images/com.png'
import rob from '../images/ex.png'
import calc from '../images/calc.png'
const Mains = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    cssEase:'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    smooth:true,
    vertical:true,
    autoplay: true,
    autoplaySpeed: 0,
  };

  return (
    <div className="main_head">
      <div className="whole_container">
        <div className="left_content_main">
          <h1 className="text-4xl cuscolor txtfamily gradientcolorr">Welcome to Sunshine</h1>
          <h1 className="text-4xl txtfamily gradientcolorr ">Education  Academy</h1>
          <p>
            Empowering students with skills in abacus, robotics, and more. Join us
            <br />
            today!
          </p>
          <div className="btns">
            <button className="blue_btns cusbtnone">Join us now</button>
            <button className="border_btns cusbtntwo">Learn more here</button>
          </div>
        </div>
        <div className="right_content_main">
          <div className="animation">
            <Slider {...settings} className="heightset">
              <div className="rightslide">
                <img src={scroll} alt="image" className="imganimation" />
              </div>
              <div>
                <Designone/>
              </div>
              <div className="rightslide">
                <img src={scroll2} alt="image" className="imganimation"/>
              </div>
              <div>
                <Designtwo/>
              </div>
              <div className="rightslide">
                <img src={scroll3} alt="image" className="imganimation"/>
              </div>
              <div className="colorlinear">
                <Designthree/>
              </div>
              <div className="rightslide">
                <img src={scroll4} alt="image" className="imganimation"/>
              </div>
              <div className="rightslide">
                <img src={scroll} alt="image" className="imganimation" />
              </div>
              <div>
                <Designone/>
              </div>
              <div className="rightslide">
                <img src={scroll2} alt="image" className="imganimation"/>
              </div>
              <div>
                <Designtwo/>
              </div>
              <div className="rightslide">
                <img src={scroll3} alt="image" className="imganimation"/>
              </div>
              <div className="colorlinear">
                <Designthree/>
              </div>
              <div className="rightslide">
                <img src={scroll4} alt="image" className="imganimation"/>
              </div>
              <div className="colorlinear">
                <Designthree/>
              </div>
              
            </Slider>
          </div>
        </div>
      </div>

      <div className="wrapper_icons">
        <div className="contents_main">
          <div className="icons">
            <i>
              <img src={calc}  className="mainicon" style={{height:'23px'}} />
            </i>
            <p>Master of Abacus</p>
          </div>
          <div className="icons">
            <i>
              <img src={rob} className="mainicon" height={24}/>
            </i>
            <p>Explore Robotics</p>
          </div>
          <div className="icons">
            <i>
              <img  src={com} className="mainicon" height={23} />
            </i>
            <p>Community and Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mains;
