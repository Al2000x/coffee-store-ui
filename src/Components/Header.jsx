import React from 'react'

const Header = (text) => {
  return (
    <div style={{ height: '100', backgroundColor: 'red' }}>        
        <h1> hello neighbor {text.children} </h1>
    </div>
  )
}

export default Header