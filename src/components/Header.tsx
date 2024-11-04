import React from 'react'
import  './Header .css';

const Header = () => {
  return (

    <div>
      <header className='header'>
        <h1>
            My Website</h1>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact"> Contact Us</a></li>
                </ul>
            </nav>
        
      </header>
    </div>
  )
}

export default Header;
