import React from "react";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import WorkIcon from '@mui/icons-material/Work';
import './index.css';

function Home() {
  return (
    <div className="app">     
      <div className="px-4 py-3  text-center app-aside">
      <h2 className="display-5 fw-bold">Designed for Proffesisonals</h2>
      <h6 className="fw-normal text-muted mb-3">Build your resume with Aperture</h6>
    <div className="col-lg-6 mx-auto">
      <div className=" justify-content-sm-center">
      <MyLocationIcon className="ai-icon"/> <br/>
      <Button variant="contained" className="create-button">Get Started</Button>
      </div>
    </div>
    <div className="product-device shadow-sm- d-none d-md-block">  </div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div className=" flex-md-equal w-100 my-md-3 ps-md-3  ">
    <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center -hoverflowidden ">
      <div className="py-3">
        <p className="display-5">Only 20% of resumes make it past the first stage</p>
        <div className="lead">Are you tired of submitting the same old resume and getting no responses?.
        With expert advice and customizable templates, you'll create a resume that stands out from 
        the crowd in less than 2 minitues and lands you the interview. <p className="apart">TRY NOW FOR FREE</p>.
          </div>
          <Button variant="contained" className="create-button">Create Resume</Button>
      </div>
      <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%; height: 300px; border-radius: 21px 21px 0 0"}}></div>
    </div>
</div>

<div className="container">
<div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3 ">
  <div className="col">
    <div className="card shadow-sm heroes1">
       <div className="card-body">
       <img src= "/images/template 1.jpeg" alt="Resume_Template"/>
        </div>
      
      </div>
      <Button variant="contained" className="create-button second">Use Template</Button>
    </div>

    <div className="col">
    <div className="card shadow-sm heroes">
       <div className="card-body ">
       <p> Profile</p>
       <p> Are you tired of submitting the same old resume and getting no responses?.
        With expert advice and customizable templates, you'll create a resume that stands out from 
        the crowd in less than 2 minitues and lands you the interview</p>
        </div>
        
      </div>
    </div>
  </div>
 </div>


  <footer className="border-top container-fluid footer">
    <div className="col-md-4  align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary inco">© 2024 Company, Inc</span>
    </div>

    <ul className="list-unstyled contact">
      <li className="ms-3 "><a className="text-body-secondary portfolio" href="https://okunola-devportfolio.netlify.app/port.html"><WorkIcon className="parent-port"/></a></li>
      <li className="ms-3"><a className="text-body-secondary portfolio" href="https://wa.me/<+2349073502307>"><WhatsAppIcon className="parent-port"/></a></li>
      <li className="ms-3"><a className="text-body-secondary portfolio" href="https://facebook.com/100027107281763/"><FacebookIcon className="parent-port"/></a></li>
    </ul>
  </footer>

    </div>
    
  );
}

export default Home;

