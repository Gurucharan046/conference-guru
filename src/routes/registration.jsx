import React, { useState } from 'react';
import "../css/registration.css";
import "../pages/registrationInfo/registrationInfo";
import {HiOutlineArrowSmRight} from "react-icons/hi"
import Navabar from '../components/navbar/navabar'
import {NavLink} from "react-router-dom"
import RegistrationInfo from '../pages/registrationInfo/registrationInfo';
import {MdOutlineCopyright} from "react-icons/md"
export default function Registration() {
    const [register,setRegister]=useState(false);
    const [indianAuthor, setIndianAuthor]=useState(false);
    const [academic,setAcademic]=useState(false);
    const [industry,setIndustry]=useState(false);
    const [foreign,setForeign]=useState(false);
    const [flag,setFlag]=useState(false);
    const [flag1,setFlag1]=useState(false);
    const [attendee,setAttendee]=useState(false);
    const [ieeeMember,setIeeemember]=useState(false);
    return (
        <section className='about-page-main-container'>
            <div className="registration-page-hero-container">
                <Navabar/>
                {/* <div className="about-page-heading-container">
                    <h1 className="about-us-heading">  <span className='about-highlight'>To Be </span> Updated</h1>
                </div> */}
                 <RegistrationInfo/>
                 <div className='reg-info-div'>
                          <h3 className='registration-tag'>For Registration</h3>
                        <HiOutlineArrowSmRight size="4rem"/>
                     <button className='register-here' onClick={()=>setRegister(!register)}>CLICK HERE</button>
                 </div>
                 <div className={register===true?'show-div':'no-show'}>
                       <div className={indianAuthor===false?"show-div-2":'no-show'}>
                               <h3 className="question">
                                     Are you an Indian Author?:
                               </h3>
                                <button className="yes" onClick={()=>setIndianAuthor(true)}>Yes</button>
                                <button className="no" onClick={()=>{setIndianAuthor(false);setFlag(true)}}>No</button>
                              </div>

                            <div className={indianAuthor===true?'show-div-1':'no-show'}>
                                <h3 className='question'>Are you an Academic expert or an Industry expert ? </h3>
                                <button className='aca-exp' onClick={()=>setAcademic(!academic)}>Academia</button>
                                <button className='ind-exp' onClick={()=>setIndustry(!industry)}>Industry</button>
                            </div>

                            <div className={indianAuthor===true && academic===true?'show-div-2':'no-show'}>
                                <h3 className='question'>Are you an IEEE Member? </h3>
                                <NavLink to="/register-here" state={{number:1}}><button className='yes' onClick={()=>setIeeemember(true)}>Yes</button></NavLink>
                                <NavLink to="/register-here"  state={{number:2}}><button className='no' onClick={()=>setIeeemember(false)}>No</button></NavLink>
                            </div>

                            <div className={indianAuthor===true && industry===true?'show-div-2':'no-show'}>
                                <h3 className='question'>Are you an IEEE Member? </h3>
                                <NavLink to="/register-here" state={{number:3}}><button className='yes' onClick={()=>setIeeemember(!ieeeMember)}>Yes</button></NavLink>
                                <NavLink to="/register-here"  state={{number:4}}><button className='no' onClick={()=>setIeeemember(!ieeeMember)}>No</button></NavLink>
                            </div>

                            <div className={flag===true?"show-div-2":'no-show'}>
                               <h3 className="question">
                                     Are you an Attendee?:
                               </h3>
                                <NavLink to="/register-here" state={{number:5}}><button className='yes' onClick={()=>setAttendee(true)}>Yes</button></NavLink>
                                <button className="no" onClick={()=>{setAttendee(false);setFlag1(true)}}>No</button>
                              </div>
                            <div className={attendee===false && indianAuthor===false && flag1===true?'show-div-2':'no-show'}>
                                <h3 className='question'>Are you a Foreign author? </h3>
                                <NavLink to="/register-here" state={{number:9}}><button className='yes' onClick={()=>setIeeemember(true)}>Yes</button></NavLink>
                                <NavLink to="/register-here"  state={{number:9}}><button className='no' onClick={()=>setIeeemember(false)}>No</button></NavLink>
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
