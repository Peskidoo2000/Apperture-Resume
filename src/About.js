import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import WorkIcon from '@mui/icons-material/Work';
import "./index.css";

function About(){
    return(
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        
      
        <main className="px-3">
          <h1 className ="about-title">ABOUT US</h1>
          <p>Welcome to Apperture Resume Builder, your partner in unlocking a brighter career future. 
            We believe that everyone deserves a chance to shine, regardless of their background or experience. 
            That's why we created Apperture - to help you create a stunning resume that showcases your skills, personality, and achievements.
           Our team of experts has crafted an intuitive and innovative platform that makes resume-building a breeze. 
           With Apperture, you can:
          </p>
          <ul>
            <li>Unleash your creativity with our diverse template library </li>
            <li>Get expert guidance from our AI-powered tools </li>
            <li> Showcase your strengths and passions with ease</li>
          </ul>
          <p>
          At Apperture, we're passionate about empowering job seekers like you to stand out in the crowd.
           Our mission is to provide a seamless, enjoyable, and effective resume-building experience that opens
            doors to new opportunities.
          </p>
          <p>
          Join the Apperture community today and start building the resume that will change your career trajectory forever!"
          </p>

          <div className="lead-last">
            <p  className="btn btn-lg btn-light fw-bold border-white bg-primary community">Join our online Community</p>
          </div>
        </main>
      
        <footer className="border-top container-fluid footer">
    <div className="col-md-4  align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary inco">© 2024 Company, Inc</span>
    </div>

    <ul className="list-unstyled contact">
      <li className="ms-3 "><a className="text-body-secondary portfolio" href="#"><WorkIcon className="parent-port"/></a></li>
      <li className="ms-3"><a className="text-body-secondary portfolio" href="https://wa.me/<+2349073502307>"><WhatsAppIcon className="parent-port"/></a></li>
      <li className="ms-3"><a className="text-body-secondary portfolio" href="https://facebook.com/100027107281763/"><FacebookIcon className="parent-port"/></a></li>
    </ul>
  </footer>
      </div>
    )
}

export default About;