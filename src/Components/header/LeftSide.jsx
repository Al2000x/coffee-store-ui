import React from 'react'
import Logo from '../../media/logo.png'
import {Link} from 'react-router-dom'
const LeftSide = () => {
  return (
    <div>
    <Link to={'/'} style={{display: "inline-block"}}> 
    <img className='logoImg' src={Logo} alt="" />
    <h1>site name</h1>
    </Link >
    </div>
  )
}

export default LeftSide