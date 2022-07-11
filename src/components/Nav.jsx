import React, { useState } from 'react'
import '../App.css'
import Logo from './Logo'


const Nav = () => {
  const[sideBar,setSideBar]=useState(false)
  return (
    <div>
      <header>
        <div className='container flexSB'>
          <div className='logo'>
            <Logo/>
          </div>
          <nav>
            <button className='toggle' onClick={()=>{setSideBar(!sideBar)}}>{sideBar?<i className='fas fa-times'></i>:<i className='fas fa-bars'></i>}</button>
            <ul className={sideBar ? "nav-links-sidebar":"nav-links"} onClick={()=>{setSideBar(false)}}>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Sobre</a>
              </li>
              <li>
                <a href=''>Musicas</a>
              </li>
              <li>
                <a href=''>Trabalhos</a>
              </li>
              <li>
                <a href=''>Blog</a>
              </li>
              <li>
                <a href=''>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Nav