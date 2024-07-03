import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div id='ftr'>
    <h5 id='footertitle'>&copy; Gameholic.com</h5>
    <h3 id='footercontact'>Contact us</h3>
    <input type='text' id='txt' placeholder='enter your name'/><br/>
    <input type='text' id='mail' placeholder='enter your email'/><br/>
    <input type='number' id='mnum' placeholder='enter your mobile number'/><br/>
    <input type='submit' id='btn'/>
    </div>
    </>
  )
}

export default Footer