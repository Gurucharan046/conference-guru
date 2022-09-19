import React from 'react'
import "../navbar/navabar.css"
import {Link} from "react-router-dom"

function Navabar() {
    return (
        <div>
            <div className="navbar_main-container">
                <ul className='navbar_menu-link-wrapper'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/Committees">Committees</Link></li>
                    <li><Link to="/Paper-Submission">Paper Submission</Link></li>
                    <li><Link to="/Registration">Registration</Link></li>
                    <li><Link to='/Contact-us'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navabar