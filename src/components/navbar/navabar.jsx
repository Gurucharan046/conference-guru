import React,{useState} from 'react'
import "../navbar/navabar.css"
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"

function Navabar() {
    const [navVisible, setNavVisible] = useState(false);
    
    const changeBackground = ()=>{
        let step = (window.innerHeight)*(15/100)
        if(window.scrollY>=step){
            setNavVisible(true);
        }
        else{
            setNavVisible(false)
        }
    };
    window.addEventListener("scroll",changeBackground)

    return (
        <div className='navbar-container'>
            <motion.nav
            animate={{y:navVisible?"1rem":"0rem"}}
            transition={{type:"tween"}}
            className={navVisible?"navbar_main-container navbar_active":"navbar_main-container"}>
                <ul className='navbar_menu-link-wrapper'>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/Committees">Committees</NavLink></li>
                    <li><NavLink to="/Paper-Submission">Paper Submission</NavLink></li>
                    <li><NavLink to="/Registration">Registration</NavLink></li>
                    <li><NavLink to='/Contact-us'>Contact Us</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                </ul>
            </motion.nav>
        </div>
    )
}

export default Navabar