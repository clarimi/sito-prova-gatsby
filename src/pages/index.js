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
      <Navbar page="home"></Navbar>
      <div className="page">
        <ArtGalleryContainer></ArtGalleryContainer>

      </div>
    </main>
  )
}

export default IndexPage
