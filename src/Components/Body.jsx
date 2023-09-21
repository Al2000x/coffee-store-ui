import React from 'react'

const Body = (text) => {
    return (
    <>
    <div style={{ height: '500px', backgroundColor: 'green' }}>{text.children}</div>
    </>
    )
  }

export default Body;