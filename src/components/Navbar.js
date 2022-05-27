
import * as React from "react"
import { Link } from "gatsby"

// Sto usando una funzione
const Navbar = () => {
  return (
    <header class="header-fiko">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/paginadue">pagina due</Link>
    </header>
  )
}

export default Navbar
