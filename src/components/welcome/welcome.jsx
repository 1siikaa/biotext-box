import React from 'react'
import {Link} from 'react-router-dom'

import './welcome.css'

function welcome() {
  return (
    <div>

        <div className= 'container'>
            <div className='card'>
               Welcome
            </div>
            <div className='card'>
               Welcome to our page
            </div>
            </div>

          <div>
          <h3><Link to='/signup'>Create an account</Link></h3>
          <h3><Link to='/login'>Already a  user</Link></h3>
          </div>


       
      


    </div>
  )
}

export default welcome