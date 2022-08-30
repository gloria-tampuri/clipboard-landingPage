import React from 'react'
import classes from './Outery.module.css'

const Outery = () => {
  return (
    <div  className={classes.Outery}>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>Available for free on App Store. Download for Mac or iOS, sync witj iCloud and you're ready to start adding to your clipboard</p>
      <div className={classes.buttons}>
            <button className={classes.btn1}>Download for iOS</button>
            <button className={classes.btn2}>Download for Mac</button>
        </div>

        
    </div>
  )
}

export default Outery;
