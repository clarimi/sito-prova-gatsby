
import * as React from "react"
import { Link } from "gatsby"
import FontImport from "./FontImport"
import { StaticImage } from "gatsby-plugin-image"


// Sto usando una funzione
const Navbar = () => {
  return (
    <header class="header-font">
      <FontImport></FontImport>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/paginadue">pagina due</Link>


    </header>
  )
}

export default Navbar
export function Logo() {
  return <StaticImage src="../images/logoveroneser.svg" alt="Logo" />
}