import React, { useState } from 'react';
import "../css/registerForm.css";
import "../pages/registrationInfo/registrationInfo";
import {HiOutlineArrowSmRight} from "react-icons/hi"
import Navabar from '../components/navbar/navabar'
import {NavLink} from "react-router-dom"
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import {MdOutlineCopyright} from "react-icons/md"
import payment1 from '../assets/images/payment1.jpg'
import payment2 from '../assets/images/payment2.jpg'
import payment3 from '../assets/images/payment3.jpg'
import payment4 from '../assets/images/payment4.jpg'
export default function RegistrationForm() {
    return (
        <section className='about-page-main-container'>
            <div>
           
                {/* <div className="about-page-heading-container">
                    <h1 className="about-us-heading">  <span className='about-highlight'>To Be </span> Updated</h1>
                </div> */}
            <div className="steps">
                    <h2 className='head'>Follow the following steps to make the payment</h2>
                
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
                    <img src={payment4} className='image' alt="" />
                </div>
            </div>
            </div>
        </section>
    )
}
