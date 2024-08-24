import React from "react";
import "./index.css"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import HandymanIcon from '@mui/icons-material/Handyman';
import DraftsIcon from '@mui/icons-material/Drafts';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
function Features(){
    return (
        <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Feature Design to Help you Build a Perfect Resume</h2>
    
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
           <MyLocationIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Easy Resume builer</h3>
              <p>Create a professional resume in minutes, stress-free!</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <AutoAwesomeMosaicIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Multi-template Options</h3>
              <p>Choose from a variety of stylish templates to showcase your skills and experience.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
           <AcUnitIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">AI obhectives generation</h3>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
          <ManageAccountsIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Optimized Resume</h3>
              <p>Ensure your resume passes through applicant tracking systems (ATS) with our expert optimization.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
           <ModeFanOffIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Free to use</h3>
              <p>Build and download your resume without spending a dime - completely free.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
           <HandymanIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"> Build from Scratch</h3>
              <p>Take control of your resume's design and content, with our intuitive self-build feature.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <DraftsIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Cover Letter</h3>
              <p>AI craft  compelling cover letter to accompany your resume, and increase your chances of getting hired.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
           <NoEncryptionIcon/>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Safe Data</h3>
              <p>Protecting your privacy, we keep your data encrypted, secure, and confidential - always.</p>
            </div>
          </div>
        </div>
      </div>
       
    )
}

export default Features;

