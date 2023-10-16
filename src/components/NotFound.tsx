import React from 'react'

import '../css/NotFound.css'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='not-found-page'>
      <h5 className='ml-2'>
        <Link to="/contacts">Not found please click here to Redirect</Link>
      </h5>
    </div>
  )
}

export default NotFound