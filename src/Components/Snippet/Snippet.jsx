import React from 'react'
import classes from './Snippet.module.css'
import computer from '../../assets/image-computer.png'

const Snippet = () => {
  return (
    <div className={classes.snippetwrapper}>
        <div className={classes.desktop}>
          <img src={computer}/>
        </div>
        <div className={classes.words}>
          <div className={classes.sections}>
            <h3>Quick Search</h3>
            <p>Easily search your snippets by content, category, web address, application, and more</p>
          </div>

          <div className={classes.sections}>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices</p>
          </div>

          <div className={classes.sections}>
            <h3>Complete History</h3>
            <p>Retieve any snippets from the first moment you started using the app</p>
          </div>
        </div>
    </div>
  )
}

export default Snippet