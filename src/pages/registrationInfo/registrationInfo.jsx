import React,{useState} from 'react'
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"
import "../registrationInfo/registrationInfo.css"
function RegistrationInfo()
{
  return(
    <div className="detailsShower">
    <h1 className="reg-info-heading">
      <span className="reg-info-part">Registration Fee for </span> Online <span className="reg-info-part">Participants</span>
    </h1>
    <table className="reg-table-details">
      <tr>
        <th></th>
        <th></th>
        <th className='col-head'>IEEE Member</th>
        <th className='col-head'>Non IEEE Member</th>
      </tr>
      <tr>
        <td className='col-head'>Indian Authors</td>
        <td>Students</td>
        <td>Rs. 5000</td>
        <td>Rs. 6000</td>
      </tr>
      <tr>
        <td></td>
        <td>Faculty, Industry</td>
        <td>Rs. 6000</td>
        <td>Rs. 7000</td>
      </tr>
      <tr>
        <td className='col-head'>Foreign Authors</td>
        <td>Students</td>
        <td>70 USD</td>
        <td>80 USD</td>
      </tr>
      <tr>
        <td></td>
        <td>Faculty, Industry</td>
        <td>80 USD</td>
        <td>90 USD</td>
      </tr>
      <tr>
        <td className='col-head'>Attendees</td>
        <td>Rs. 1000</td>
      </tr>
    </table>

    <h1 className="reg-info-heading">
      <span className="reg-info-part">Registration Fee for </span> Offline <span className="reg-info-part">Participants</span>
    </h1>
    <table className="reg-table-details">
      <tr>
        <th></th>
        <th></th>
        <th className='col-head'>IEEE Member</th>
        <th className='col-head'>Non IEEE Member</th>
      </tr>
      <tr>
        <td className='col-head'>Indian Authors</td>
        <td>Students</td>
        <td>Rs. 5500</td>
        <td>Rs. 6500</td>
      </tr>
      <tr>
        <td></td>
        <td>Faculty, Industry</td>
        <td>Rs. 6500</td>
        <td>Rs. 7500</td>
      </tr>
      <tr>
        <td className='col-head'>Foreign Authors</td>
        <td>Students</td>
        <td>75 USD</td>
        <td>85 USD</td>
      </tr>
      <tr>
        <td></td>
        <td>Faculty, Industry</td>
        <td>85 USD</td>
        <td>95 USD</td>
      </tr>
      <tr>
        <td className='col-head'>Attendees</td>
        <td>Rs. 2000</td>
      </tr>
    </table>
  </div>
  )   
}
export default RegistrationInfo;