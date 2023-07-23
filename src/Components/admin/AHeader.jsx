import React from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import ReduxStore from '../../Config/Redux/Store'
function AHeader() {
  
  const admin = useSelector(ReduxStore => ReduxStore?.userManagement?.adminDetails);



  return (
    <div>
      <Link to={'/admin/login'} >login</Link>
      <h1>admin header</h1>
    </div>
  )
}

export default AHeader
