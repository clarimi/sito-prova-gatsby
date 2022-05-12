import * as React from "react"
import Navbar from "../components/Navbar"
import "../styles/style.scss"
import ArtGalleryContainer from "../components/ArtGalleryContainer"




// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Navbar></Navbar>
      <ArtGalleryContainer></ArtGalleryContainer>
      <h1>
        ciao sono mario
      </h1>
    </main>
  )
}

export default IndexPage
