import React from 'react'
import classes from './Brands.module.css'
import google from '../../assets/logo-google.png'
import  imb from '../../assets/logo-ibm.png'
import microsoft from '../../assets/logo-microsoft.png'
import hp from '../../assets/logo-hp.png'
import vector from '../../assets/logo-vector-graphics.png'
const Brands = () => {
  return (
    <div className={classes.Brands}>
        <img src={google}alt="google-icon" />
        <img src={imb} alt="imb logo" /> 
        <img src={microsoft} alt="microsoft" />
        <img src={hp} alt="hp logo" />
        <img src={vector} alt="vector logo" />

    </div>
  )
}

export default Brands