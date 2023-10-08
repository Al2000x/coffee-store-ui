import React from 'react'
import Logo from '../../media/logo.png'
import {Link} from 'react-router-dom'
const LeftSide = () => {
  return (
    <>
    <Link to={'/'} style={{display: "inline-block"}}> 
    <img className='logoImg' src={Logo} alt="" />
    </Link >
    <h1>testtest</h1>
    </>
  )
}

export default LeftSide