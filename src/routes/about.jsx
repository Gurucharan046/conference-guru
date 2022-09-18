import React from 'react';
import "../css/about.css";
import logo from "../assets/images/sit logo.png";

export default function about() {
    return (
        <section className='about-page-main-container'>
            <div className="sit-image-container">
                <img src={logo} alt="sit" />
            </div>
            <div className="about-us-text-container">
                <p className="about-us-text"></p>
            </div>
        </section>
    )
}
