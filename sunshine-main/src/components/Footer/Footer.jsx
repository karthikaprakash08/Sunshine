import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import { mail } from 'react-icons-kit/icomoon/mail';
import { phone } from 'react-icons-kit/icomoon/phone';

// import { twitter } from 'react-icons-kit/icomoon/twitter';
// import { facebook } from 'react-icons-kit/icomoon/facebook';

// import { linkedin } from 'react-icons-kit/icomoon/linkedin';
// import { youtube } from 'react-icons-kit/icomoon/youtube';

import './Footer.css';
import axios from 'axios';

const Footer = () => {
  let [error, seterror] = useState("")
  let [Success, setSuccess] = useState("")
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    seterror("")
    setSuccess("")
    let data =  {name:name, phone:phoneNumber, email:email, message:message };
    try {
      const response = await axios.get('http://localhost:3030/contacts', {
        params: {
          email: email,
        },});
      console.log(response.data);
      if(response.data=="null"){
        seterror("");
        try {
          const response = await axios.post('http://localhost:3030/savecontact', data, {
            headers: { 'Content-Type': 'application/json' }, // Set Content-Type header
          });
          console.log(response.data); // Handle successful response (optional)
          setSuccess("Message send successfully!");
        } catch (error) {
          console.error(error); // Handle errors
        }
      }
      else{
        seterror("Message from this Email Already Exist!")
      }
    } catch (error) {
      console.error(error); // Handle errors
    }
  };

  return (
    <footer className="probootstrap-footer probootstrap-bg">
      <Container>
        <Row style={{marginTop:"120px"}}>
          <Col md={8} sm={12}>
            <div className="probootstrap-footer-widget">
              {/* <h3>About The School</h3> */}
              <p>
              Sunshine Education Academy was established in the year 2012 with the objective of providing “SMARTKIDZ - SKILL ENHANCEMENT PROGRAMME USING EXPERIENTIAL LEARNING PLATFORM” which supports schools, parents & teachers in developing smart children.
              </p>
              {/* <h3>Social</h3> 
              <ul className="probootstrap-footer-social">
              <li>
                  <a href="#">
                    <Icon icon={facebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon icon={twitter} />
                  </a>
                </li>
               
                <li>
                  <a href="#">
                    <Icon icon={linkedin} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon icon={youtube} />
                  </a>
                </li>
              </ul> */}
            </div>
          </Col>
          
          <Col md={4} sm={12}>
            <div className="probootstrap-footer-widget" style={{marginLeft:"30px" }}>
              <h3>Contact</h3>
              <ul className="probootstrap-contact-info" style={{fontSize:"25px" }}>
                <li>
                  <Icon icon={home} /><span>INDIA, TAMILNADU, CHENNAI</span>
                </li>
                <li>
                  <Icon icon={mail} /><span>info@smartkidz.co.in</span>
                </li>
                <li>
                  <Icon icon={phone} /><span>+91 9962322122</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={12}  sm={12}>
            <div className="probootstrap-footer-widget">
              <h3 style={{textAlign:"center", margin:'20px'}}>GET IN TOUCH</h3>
              </div>
              </Col>

          <Col md={6}  sm={12} mdPush={1}>
            <div className="probootstrap-footer-widget1">
              <h3>Don't Be Shy</h3>
              <p>
              Feel free to get in touch with us we
              always open to discussing new
              projects. creative ideas or
              opportunities to be part of your
              vision
            </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="probootstrap-footer-widget1">
                <form onSubmit={handleSubmit}>
                  <div style={{display:"flex",width:"100%",gap:"4%"}}>
                    <FormGroup style={{width:"48%"}}>
                        <Label  style={{fontSize: "22px", fontWeight: "600", color: "rgba(255, 255, 255, 0.4)"}} for="name">Name</Label>
                        <Input
                        onChange={(e)=>setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            style={{
                border: 'none',
                borderBottom: '3.2px solid #0ea5e9', 
                backgroundColor: 'transparent', 
                color:"#0ea5e9", 
                outline: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
                padding: '5px 0', 
                width:"100%"
            }}
           ></Input>
                    </FormGroup>
                    <FormGroup style={{width:"48%"}}>
                        <Label style={{fontSize: "22px", fontWeight: "600", color: "rgba(255, 255, 255, 0.4)"}} for="phone">Phone</Label>
                        <Input
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                type="text"
                name="phone"
                id="phone"
                style={{
                border: 'none',
                borderBottom: '3.2px solid #0ea5e9', 
                backgroundColor: 'transparent', 
                color:"#0ea5e9", 
                outline: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
                padding: '5px 0', 
                width:"100%"
            }}
            ></Input>
                    </FormGroup>
                    </div>
                    <div style={{display:"flex",width:"100%",gap:"4%"}}>
                    <FormGroup style={{width:"48%"}}>
                        <Label  style={{fontSize: "22px", fontWeight: "600", color: "rgba(255, 255, 255, 0.4)"}} for="email">Email</Label>
                        <Input
                        onChange={(e)=>setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            style={{
                border: 'none',
                borderBottom: '3.2px solid #0ea5e9', 
                backgroundColor: 'transparent', 
                color:"#0ea5e9", 
                outline: 'none', 
                boxShadow: 'none', 
                borderRadius: '0',
                padding: '5px 0', 
                width:"100%",
            }}
              />
        
            </FormGroup>

            <FormGroup style={{width:"48%"}}>
                                <Label  style={{fontSize: "22px", fontWeight: "600", color: "rgba(255, 255, 255, 0.4)"}} for="message">Message</Label>
                                <Input
                                onChange={(e)=>setMessage(e.target.value)}
                    type="text"
                    name="message"
                    id="message"
                    style={{
                        border: 'none',
                        borderBottom: '3.2px solid #0ea5e9', 
                        backgroundColor: 'transparent', 
                        color:"#0ea5e9", 
                        outline: 'none', 
                        boxShadow: 'none', 
                        borderRadius: '0',
                        padding: '5px 0', 
                        width:"100%"
                      
                    }}  
                />
              </FormGroup>
              </div>
                {error!="" && <p style={{color:"red", fontSize:"16px", margin:"0px"}}>{error}</p>}
              {Success!="" && <p style={{color:"green"}}>{Success}</p>}
              <Col>
                            <div className="button-container" style={{margin:"0px",justifyContent:"start"}}>
                    <Button className="custom-button" type='submit' style={{width:"max-content",margin:"10px 0px"}}>Submit</Button>
                </div>
                </Col>
                </form>
                    </div>
        </Col> 
        </Row>
      </Container>


   
    </footer>
  );
};

export default Footer;