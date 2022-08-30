import React from 'react'
import classes from './Logo.module.css'
import logo from '../../assets/logoC.svg'
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt='Logo'/>
    </div>
  )
}

export default Logo