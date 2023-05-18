import React, { useState } from 'react';
import "../css/registration.css";
import "../pages/registrationInfo/registrationInfo";
import { HiOutlineArrowSmRight } from "react-icons/hi"
import Navabar from '../components/navbar/navabar'
import { NavLink } from "react-router-dom"
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import { MdOutlineCopyright } from "react-icons/md"
import Questions from '../pages/questions/questions';
export default function Registration() {
    // const [register, setRegister] = useState(false);
    // const [indianAuthor, setIndianAuthor] = useState(false);
    // const [academic, setAcademic] = useState(false);
    // const [industry, setIndustry] = useState(false);
    // const [foreign, setForeign] = useState(false);
    // const [flag, setFlag] = useState(false);
    // const [flag1, setFlag1] = useState(false);
    // const [attendee, setAttendee] = useState(false);
    // const [ieeeMember, setIeeemember] = useState(false);
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
