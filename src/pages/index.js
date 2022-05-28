import * as React from "react"
import Navbar from "../components/Navbar"
import "../styles/style.scss"
import ArtGalleryContainer from "../components/ArtGalleryContainer"
import FontImport from "../components/FontImport"




// markup
const IndexPage = () => {
  return (
    <main>
      <FontImport></FontImport>
      <title>Home Page</title>
      <Navbar></Navbar>
      <ArtGalleryContainer></ArtGalleryContainer>
      <h1>
        c
      </h1>
    </main>
  )
}

export default IndexPage
