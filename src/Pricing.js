import React from "react";
import CheckIcon from '@mui/icons-material/Check';

function Pricing(){
    return (
        <div>
           <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <p className="fs-5 text-body-secondary">Quickly build an effective resume that lands you your job dream in one minitue.
        Upgrade to our  professional and enterprises features which allows you use most of our customizable templates</p>
    </div>
    <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Build from scratch</li>
              <li>Limited Template</li>
              <li>No Email support</li>
              <li>No carrer objectives generation</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$10<small className="text-body-secondary fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 plus free templates for usage</li>
              <li>Carrer objectives generation</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 ">
            <h4 className="my-0 fw-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$25<small className="text-body-secondary fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>unlimited template for usage</li>
              <li>AI carrer objectives generation</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>

    <h2 className="display-6 text-center mb-4">Subscription Comparism</h2>

    <div className="table-responsive">
      <table className="table text-center">
        <thead>
          <tr>
            <th style={{width: "34%"}}></th>
            <th style={{width: "22%"}}>Free</th>
            <th style={{width: "22%"}}>Pro</th>
            <th style={{width: "22%"}}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-start">Template</th>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Objectives generation</th>
            <td></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" className="text-start">Phone Support</th>
            <td></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Email Support</th>
            <td></td>
            <td></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Help Center Access</th>
            <td></td>
            <td></td>
            <td><CheckIcon/></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><CheckIcon/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
        </div>
    )
}

export default Pricing;