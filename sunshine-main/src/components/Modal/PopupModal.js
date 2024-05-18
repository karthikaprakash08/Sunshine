import React, { useState, useEffect } from 'react';
import './PopupModal.css';
import { Margin } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false); // Initially hide the modal
  let [error, seterror] = useState("")
  let [Success, setSuccess] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    seterror("")
    setSuccess("")
    event.preventDefault();
    let data =  {name:name, phone:phoneNumber, email:email, location:location };
    try {
      const response = await axios.get('http://localhost:3030/users', {
        params: {
          email: email,
        },});
      console.log(response.data);
      if(response.data=="null"){
        seterror("");
        try {
          const response = await axios.post('http://localhost:3030/', data, {
            headers: { 'Content-Type': 'application/json' }, // Set Content-Type header
          });
          console.log(response.data); // Handle successful response (optional)
          setSuccess("Thanks for registering with us!")
          const timer = setTimeout(() => {
            setShowModal(false);
          }, 2000); 
      
          return () => clearTimeout(timer); 
        } catch (error) {
          console.error(error); // Handle errors
        }
      }
      else{
        seterror("Email Already Exist!")
      }
    } catch (error) {
      console.error(error); // Handle errors
    }
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
        <button className="closebtn" onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>
          <h1>WAIT! </h1>
          <p style={{marginBottom:"10px"}}>Let's Illuminate Your Path to Educational Excellence!</p>
          <p>Discover How We Helped Schools Like Yours Enhance Learning Outcomes - </p>
          <p>Read Our <span>Success Stories</span> Today! Experience the Power of <span>Sunshine Franchise</span> - </p>
          <p>Your Trusted Partner for Educational Growth.</p>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className='inputscontainer'>
              <div className='inputgroup'>
                <div className='inputitem'>
                  <div className="icondiv">
                  <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Name'/>
                </div>
                <div className='inputitem'>
                  <div className="icondiv">
                  <FontAwesomeIcon icon={faPhone} />
                  </div>
                <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder='Phone Number'/>
                </div>
              </div>
              <div  className='inputgroup'>
              <div className='inputitem'>
                  <div className="icondiv">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                <input type="email" value={email} onChange={(event) =>{setEmail(event.target.value);seterror("")}} placeholder='Email'/>
                </div>
                <div className='inputitem'>
                  <div className="icondiv">
                  <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} placeholder='Location'/>
                </div>
              </div>
            </div>
            <br></br>
            {error!="" && <p style={{color:"red"}}>{error}</p>}
            {Success!="" && <p style={{color:"green"}}>{Success}</p>}
            <button type="submit" className="submitbtn">Submit Form</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupModal;