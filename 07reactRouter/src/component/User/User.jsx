import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid}=useParams()    //  to take dynamic data from url to site
  return (
    <div>User:{userid}</div>
  )
}

export default User