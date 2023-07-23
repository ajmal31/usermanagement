import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import  ReduxStore  from '../../Config/Redux/Store'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postUser } from '../../Config/Redux/Slices'
import { useNavigate } from 'react-router-dom'
function Header() {
  const dispatch=useDispatch()
  const user=useSelector((ReduxStore)=>ReduxStore.userMangement.userDetails[0])
   console.log('header user details',user)
   const go=useNavigate()
   useEffect(()=>{

    if(!localStorage.getItem('token'))
    {
        go('/login')
    }
   },[])
  return (


    <div>
      <h1>Header </h1>
      <Link to={`/profile/${user?._id}`} > <h3>userName:{user?.email}</h3></Link>
      <Link to={'/login'} > <h3 >logout</h3></Link>
    </div>

  )
}

export default Header
