import React from 'react';
import "../css/about.css";
import logo from "../assets/images/sit logo.png";

export default function about() {
    return (
        <section className='about-page-main-container'>
            <div className="sit-image-container">
                <img src={logo} alt="sit" />
            </div>
            <h1 className="about-us-heading">About Us</h1>
            <div className="about-us-text-container">
                <p className="about-us-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nesciunt officiis voluptas molestiae error a suscipit asperiores sit amet! Soluta accusamus fugit, perferendis quo sint veniam consequuntur maiores corrupti odit laborum rerum aliquid quam laudantium temporibus culpa in deleniti rem similique, quidem, excepturi doloribus quisquam! Cum vero officia sed quisquam.
                </p>
            </div>
        </section>
    )
}
