import React, { useState } from 'react';
// import "../css/registerForm.css";
// import "../pages/registrationInfo/registrationInfo";
import { HiOutlineArrowSmRight } from "react-icons/hi"
import Navabar from '../components/navbar/navabar'
import { NavLink, useLocation } from "react-router-dom"
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import { MdOutlineCopyright } from "react-icons/md"
import payment1 from '../assets/images/payment1.jpg'
import payment2 from '../assets/images/payment2.jpg'
import payment3 from '../assets/images/payment3.jpg'
import payment4 from '../assets/images/payment4.jpg'
import RegistrationForm from './registerForm';
import "../css/registration.css";
import "../css/paymentInfo.css";
import "../css/registerForm.css"
export default function PaymentInfo() {
    const data = useLocation();
    const num = data.state.number;
    const [paymentStep, setPaymentStep] = useState(true)
    if (num === 1) {
        return (
            <div>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                <h2 className="payment-make-head">Instructions to make the Registration.</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/fypuM3dxdYuQGwNC7" target='blank'>https://forms.gle/fypuM3dxdYuQGwNC7</a></li>
                    </ul>
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 2) {
        return (
            <div>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                                    <div className="google-form-main-container">
                <h2 className="payment-make-head">Instructions to make the Registration.</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/hGwmJsdLHG9zFa9L8" target='blank'>https://forms.gle/hGwmJsdLHG9zFa9L8</a></li>
                    </ul>
                </div>
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 3) {
        return (
            <div>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                <h2 className="payment-make-head">Instructions to make the Registration.</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/oG54FnvXDwNrsg3T8" target='blank'>https://forms.gle/oG54FnvXDwNrsg3T8</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 4) {
        return (
            <div>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                <h2 className="payment-make-head">Instructions to make the Registration.</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/i9jZpEKPCCowAfgt6" target='blank'>https://forms.gle/i9jZpEKPCCowAfgt6</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else if (num === 5) {
        return (
            <div>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>

                <div className="google-form-main-container">
                <h2 className="payment-make-head">Instructions to make the Registration.</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/WPg4XhmD2gGTZg9g9" target='blank'>https://forms.gle/WPg4XhmD2gGTZg9g9</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <Navabar />
                <div className='details'>
                    <RegistrationForm />
                </div>
                <div className="google-form-main-container">
                <h2 className="payment-make-head">Instructions to make the Registration.</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Once you have completed the payment.</li>
                        <li className="step-detail">Fill the Google Form. <a href="https://forms.gle/Z9m1LjtD7tziABWV9" target='blank'>https://forms.gle/Z9m1LjtD7tziABWV9</a></li>
                    </ul>

                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    
                    {/* <iframe className='gform' src="https://docs.google.com/forms/d/e/1FAIpQLSfOuWE1IDdlJYppIl-0xX3w9p-DThboHhRUGNDb-UgdUlWiEw/viewform?embedded=true" width="640" height="1499" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                </div>
                <div className='footer pay-footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        )
    }
}