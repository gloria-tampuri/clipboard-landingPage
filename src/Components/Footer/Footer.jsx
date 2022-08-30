import React from 'react'
import classes from './Footer.module.css'
import logo from '../../assets/logoC.svg'
import facebook from '../../assets/icon-facebook.svg'
import twitter from '../../assets/icon-twitter.svg'
import instagram from '../../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.links}>
            <div> <img src={logo}alt="logo" /></div>
            <div className={classes.link}>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Install Guide</p>
                <p>Contact Us</p>
                <p>Press Kit</p>
            </div>
        </div>
        <div className={classes.socials}>
            <img src={facebook} alt='facebook'/>
            <img src={twitter} alt='twitter'/>
            <img src={instagram} alt='instagram'/>
        </div>
    </div>
  )
}

export default Footer