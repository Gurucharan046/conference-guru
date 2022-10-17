import React from 'react';
import "../css/about.css"
import Navabar from '../components/navbar/navabar'
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import {MdOutlineCopyright} from "react-icons/md"
export default function registration() {
    return (
        <section className='about-page-main-container'>
            <div className="about-page-hero-container">
                <Navabar/>
                {/* <div className="about-page-heading-container">
                    <h1 className="about-us-heading">  <span className='about-highlight'>To Be </span> Updated</h1>
                </div> */}
                 <RegistrationInfo/>
            </div>
            <div className='footer'>
                <MdOutlineCopyright className='copyright'/> 
                <h2>Copyrights by IEEE SIT SB</h2>
            </div>
        </section>
    )
}
