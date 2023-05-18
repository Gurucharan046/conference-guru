import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import "./questions.css"
import { HiOutlineArrowSmRight } from "react-icons/hi"
function Questions() {
  const [register, setRegister] = useState(false);
  // const [indianAuthor, setIndianAuthor] = useState(false);
  // const [academic, setAcademic] = useState(false);
  // const [industry, setIndustry] = useState(false);
  // const [foreign, setForeign] = useState(false);
  // const [flag, setFlag] = useState(false);
  // const [flag1, setFlag1] = useState(false);
  // const [attendee, setAttendee] = useState(false);
  // const [ieeeMember, setIeeemember] = useState(false);
  return (
    <div>
      <div className='reg-info-div'>
        <h3 className='registration-tag'>For Registration</h3>
        <HiOutlineArrowSmRight size="4rem" />
        <button className='register-here' onClick={() => setRegister(!register)}>CHOOSE OPTION</button>
      </div>
      <div className={register === true ? 'show-div' : 'no-show'}>
        <ul className='participation-type'>
          <li><NavLink className="register-link" to="/register-here" state={{ number: 1 }}>1. Indian Author Academia IEEE Members</NavLink></li>
          <li><NavLink className="register-link" to="/register-here" state={{ number: 2 }}>2. Indian Author Academia Non IEEE Members</NavLink></li>
          <li><NavLink className="register-link" to="/register-here" state={{ number: 3 }}>3. Indian Author Industry IEEE Members</NavLink></li>
          <li><NavLink className="register-link" to="/register-here" state={{ number: 4 }}>4. Indian Author Industry Non IEEE Members</NavLink></li>
          <li><NavLink className="register-link" to="/register-here" state={{ number: 5 }}>5. Foreign Author </NavLink></li>
          <li><NavLink className="register-link" to="/register-here" state={{ number: 6 }}>6. Attendees</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
export default Questions;