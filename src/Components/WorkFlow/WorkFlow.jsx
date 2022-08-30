import React from 'react'
import classes from './WorkFlow.module.css'
import blacklist from '../../assets/icon-blacklist.svg'
import text from '../../assets/icon-text.svg'
import preview from '../../assets/icon-preview.svg'

const WorkFlow = () => {
  return (
    <div className={classes.WorkFlow}>
        <h2>Supercharge your workflow</h2>
        <p>We've got the tools to boost your productivity</p>

        <div className={classes.tools}>
           <div className={classes.tool}>
            <img src={blacklist} alt='blacklist'/>
            <h4>Create blacklist</h4>
            <p>Ensure sensitive information never makes its way to your clipboard by clipboard by excluding certain sources</p>
           </div>
           <div className={classes.tool}>
            <img src={text} alt='text-icon'/>
            <h4>Plain text snippets</h4>
            <p>Remove unwanted formatting from copied text for a consistent look</p>
           </div>
           <div className={classes.tool}>
            <img src={preview} alt='preview'/>
            <h4>Sneak preview</h4>
            <p> Quick preview of all snippets on your Clipboard for easy access</p>
           </div>
        </div>
    </div>
  )
}

export default WorkFlow