import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
import LogoRap from "../components/img/logo.png"

export default function Logo() {
  return (
    <Router>
      <div>
        <Link to='#home'>
          <img src={LogoRap} alt='Logo Rap Nation' />
        </Link>
      </div>
    </Router>
  )
}
