import React, { useState } from 'react';
import "../css/registerForm.css";
import "../pages/registrationInfo/registrationInfo";
import { HiOutlineArrowSmRight } from "react-icons/hi"
import Navabar from '../components/navbar/navabar'
import { NavLink } from "react-router-dom"
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import { MdOutlineCopyright } from "react-icons/md"
import payment1 from '../assets/images/payment1.jpg'
import payment2 from '../assets/images/payment2.jpg'
import payment3 from '../assets/images/payment3.jpg'
import payment5 from '../assets/images/payment5.jpg'
import payment6 from '../assets/images/payment6.jpg'
export default function RegistrationForm() {
    return (
        <section className='about-page-main-container'>
            <div>

                {/* <div className="about-page-heading-container">
                    <h1 className="about-us-heading">  <span className='about-highlight'>To Be </span> Updated</h1>
                </div> */}
                <div className="steps">
                    {/* <h2 className='head'>Follow the following steps to make the payment</h2>
                
                <div className="images">
                    <p>1.Give your <span>paper id</span> as  input for any id</p>
                    <img src={payment1} className='image' alt="" />
                </div>
                <div className="images">
                    <p>2.Fill the other details accordingly and select ICSSES 2023 from the fee head</p>
                    <img src={payment2} className='image' alt="" />
                </div>
                <div className="images">
                    <p>3.Select the participant type in the fee component</p>
                    <img src={payment3} className='image' alt="" />
                </div>
                <div className="images">
                    <p>4.Click on confirm inorder to proceed to the payment gateway</p>
                    <img src=-{payment4} className='image' alt="" />
                </div>
                <a href="http://erp.sit.ac.in/external.aspx">http://erp.sit.ac.in/external.aspx</a> */}
                <h2 className="payment-make-head">Instructions to make the payment.</h2>
                    <ul className='payment-step-details'>
                        <li className="step-detail">Vist the payment website.</li>
                        <li className="step-detail">Fill the required form detail.Please put your paper id in the Any id no</li>
                        <li className="step-detail">Select the ICSSES 2023 from the Select Fee Header</li>
                        <li className="step-detail">Select the participant type in Select Fee Component</li>
                        <li className="step-detail">Click on confirm to proceed with the payment</li>
                        <li className="step-detail">As soon as you complete the payment please take a note of  the 14 digit transaction reference number which looks like "YUR31719819120"(first 3 digit is always alphabets)</li>
                        <li className="step-detail">Website Link : <a href="http://erp.sit.ac.in/external.aspx" target='blank'>http://erp.sit.ac.in/external.aspx</a> </li>
                    </ul>
                    <br />
                    {/* <div className="payment-image-container">
                        <img className='payment-image-1' src={payment5} alt="payment" />
                        <img className='payment-image-2' src={payment6} alt="payment" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}
