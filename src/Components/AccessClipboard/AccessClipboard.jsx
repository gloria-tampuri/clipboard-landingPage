import React from 'react'
import classes from './AccessClipboard.module.css'
import devices from '../../assets/image-devices.png'

const AccessClipboard = () => {
  return (
    <div className={classes.access}>
        <h2>Access Clipboard Anywhere</h2>
        <p>Whether you're on the go, or at your computer, you can access all your clipboard snippet in a few simple clicks</p>

        <img src={devices} alt={devices}/>
    </div>
  )
}

export default AccessClipboard