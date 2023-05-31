import React from 'react';
import "../css/registration.css";
import "../pages/registrationInfo/registrationInfo";
import Navabar from '../components/navbar/navabar'
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import { MdOutlineCopyright } from "react-icons/md"
import Questions from '../pages/questions/questions';
export default function Registration() {
    return (
        <section className='registration-page-main-container'>
            <div className='registration-page-hero-container'>
                <Navabar />
                <RegistrationInfo />
                <Questions />
                <div className='footer'>
                    <MdOutlineCopyright className='copyright' />
                    <h2>Copyrights by IEEE SIT SB</h2>
                </div>
            </div>
        </section>
    )
}
