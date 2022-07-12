import React, { useState } from 'react'
import '../App.css'
import Logo from './Logo'
import { BrowserRouter as Router } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

const Nav = () => {
  const [sideBar, setSideBar] = useState(false)
  return (
    <div>
      <header>
        <div className='container flexSB'>
          <div className='logo'>
            <Logo />
          </div>
          <nav>
            <button className='toggle' onClick={() => { setSideBar(!sideBar) }}>
              {sideBar ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
            <Router>
              <ul className={sideBar ? "nav-links-sidebar" : "nav-links"} onClick={() => { setSideBar(false) }}>
                <li>
                  <Link to='#home' smooth>Home</Link>
                </li>
                <li>
                  <Link to='#about' smooth>About</Link>
                </li>
                <li>
                  <Link to='#creative' smooth>Creative</Link>
                </li>
                <li>
                  <Link to='#education' smooth>Education</Link>
                </li>
                <li>
                  <Link to='#work' smooth>Work</Link>
                </li>
                <li>
                  <Link to='#port' smooth>Portifolio</Link>
                </li>
                <li>
                  <Link to='#contact' smooth>Contact</Link>
                </li>
              </ul>
            </Router>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Nav