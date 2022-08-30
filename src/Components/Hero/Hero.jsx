import React from 'react'
import classes from './Hero.module.css'
const Hero = () => {
  return (
    <div className={classes.Hero}>
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices</p>
        <div className={classes.buttons}>
            <button className={classes.btn1}>Download for iOS</button>
            <button className={classes.btn2}>Download for Mac</button>
        </div>

        <div className={classes.snippets}>
            <h2>Keep track of your snippets</h2>
            <p>Clipboard instantly stores any item you copy in cloud, meaning
                you can access your snippets immediately on all devices.
                Our Mac and ios apps will help you organize everything
            </p>
        </div>
    </div>
  )
}

export default Hero