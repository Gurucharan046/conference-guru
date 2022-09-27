import React from 'react'
import "../css/contactus.css"
import {MdOutlineCopyright} from "react-icons/md"
import {motion} from "framer-motion"
import logo from "../assets/images/sit logo.png";
import Navabar from '../components/navbar/navabar'
function Contactus() {
  return (
    <section className='contact-page-main-container'>
    <div className="contact-page-hero-container">
        <Navabar/>
        <div className="contact-page-heading-container">
            <h1 className="contact-us-heading">  <span className='contact-highlight'>Contact</span> Us</h1>
        </div>
    </div>
    <div className="sit-image-container">
        <img src={logo} alt="sit" />
    </div>
    <div className="contact-wrapper">
            {/* this code is same as home.jsx */}
         <div className="contact-containers">
                <div className="contact-card-wrappers">
                <motion.div 
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}}
              className="contact-card-container contact1">
                 <div className="contact-name">
                  <p>Dr. Veena Karjigi</p>
                 </div>
                 <div className="contact-details">
                 <ul>
                  <li className='asp'>Associate Professor</li>
                  <li>Dept. of ECE</li>
                  <li>SIT, Tumkur</li>
                  <li className='decor asp'>+91 9481489700</li>
                  <li className='decor asp'>veena.karjigi@sit.ac.in</li>
                 </ul>
                 </div>
                 </motion.div>
                 <motion.div 
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}} 
              className="contact-card-container contact2">
              <div className="contact-name">
                <p>Dr. Latha H K E</p>
              </div>
              <div className="contact-details">
                <ul>
                  <li className='asp'>Associate Professor</li>
                  <li>Dept. of EIE</li>
                  <li>SIT, Tumkur</li>
                  <li className='decor asp'>+91 9449852696</li>
                  <li className='decor asp'>lathahke@sit.ac.in</li>
                </ul>
              </div>
            </motion.div>

                 </div>
        

         </div>
    </div>
    <div className='footer'>
        <MdOutlineCopyright className='copyright'/> 
        <h2>Copyrights by IEEE SIT SB</h2>
    </div>
</section>
  )
}

export default Contactus