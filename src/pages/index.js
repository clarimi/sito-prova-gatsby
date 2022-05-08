import * as React from "react"
import ArtGallery from "../components/ArtGallery"
import Navbar from "../components/Navbar"
import "../styles/style.scss"



// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Navbar></Navbar>
      <ArtGallery></ArtGallery>
      <h1>
       ciao sono mario 
      </h1>
    </main>
  )
}

export default IndexPage
