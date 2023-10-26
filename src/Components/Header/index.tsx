import React from 'react'
import Social_Network from '../Social_Network';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <strong className='logo'>
          <a href="#"><img src="assets/images/logo.png" alt="logo" /></a>
        </strong>
        <Social_Network />
      </div>
    </div>
  )
}

export default Header;