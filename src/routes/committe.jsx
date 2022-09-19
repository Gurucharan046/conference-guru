import React from 'react';
import "../css/committe.css";
import Navabar from '../components/navbar/navabar'

export default function committe() {
  return (
    <section className='committe-page-main-container'>
        <div className="committe-page-hero-container">
            <Navabar/>
            <div className="committe-page-heading-container">
                <h1 className="committe-heading">Committe</h1>
            </div>
        </div>
        
    </section>
  )
}
