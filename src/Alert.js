 import React, { useEffect } from 'react'



// 17 type and msg are from alert    23           32
const Alert = ({type, msg,          removeAlert, list}) => {

// 24
  useEffect(() => {
    const timeout = setTimeout(()=>{
    removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
    //33
  }, [list])
  // 18
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
