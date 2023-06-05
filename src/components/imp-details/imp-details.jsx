import React from 'react';
import "./imp-details.css";
import downloadPDFReg from "../../assets/registrations.pdf";
import downloadPDFToBeConfirm from "../../assets/toBeConfirmed.pdf";

export default function impDetails() {


    return (
        <div className="imp-details-confenrence-container">
            <div className="imp-para-container">
                <div className="imp-confrence-para-1">
                    <p>
                        Authors of the accepted papers are hearby informed to complete the following by 2nd June 2023
                        <ol className='level-1-list'>
                            <li>Camera Ready Paper</li>
                            <ul className='level-2-list'>
                                <li>Log in to your microsoft CMT account</li>
                                <li>Click on the edit camera ready submission link</li>
                                <li>Upload the camera ready paper</li>
                            </ul>
                        </ol>
                        <br />
                        <ol className='level-1-list'>
                            <li>IEEE Copyright File</li>
                            <ul className='level-2-list'>
                                <li>Log in to your microsoft CMT account</li>
                                <li>Click on the IEEE Copyright Form</li>
                                <li>Follow the instructions given on the page</li>
                            </ul>
                        </ol>
                        <br />
                        <ol className='level-1-list'>
                            <li>Payment</li>
                            <ul className='level-2-list'>
                                <li>Pay the prescribed amount mentioned depending on the category</li>
                                <li>Note the transaction ID</li>
                            </ul>
                        </ol>
                        <br />
                        <ol className='level-1-list'>
                            <li>Camera Ready Paper</li>
                            <ul className='level-2-list'>
                                <li>Fill the google form</li>
                            </ul>
                        </ol>
                    </p>
                </div>
            </div>
            <div className="imp-page-buttons">
                <a href={downloadPDFReg} download="Example-PDF-document" target="_blank" rel="noreferrer">
                    <button className='download-btn'>Confirmed Registrations</button>
                </a>
                <a href={downloadPDFToBeConfirm} download="Example-PDF-document" target="_blank" rel="noreferrer">
                    <button className='download-btn'>Registrations to be Confirmed</button>
                </a>
            </div>
        </div>
    )
}
