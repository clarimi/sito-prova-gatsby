
import * as React from "react"
import { Link } from "gatsby"
import FontImport from "./FontImport"
import { StaticImage } from "gatsby-plugin-image"
import logo from '../images/logoveroneser.svg'


// Sto usando una funzione
const Navbar = () => {
  return (
    <header class="header">
      <Link to="/about" className="link-navbar">ABOUT</Link>
      <Link to="/"><img src={logo} className="logo" /></Link>
      <Link to="/paginadue" className="link-navbar">COLLABORA</Link>
    </header>
  )
}

export default Navbar