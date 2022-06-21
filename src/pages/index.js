import * as React from "react"
import NavbarHeader from "../components/NavbarHeader"
import "../styles/style.scss"
import ArtGalleryContainer from "../components/ArtGalleryContainer"
import FontImport from "../components/FontImport"




// markup
const IndexPage = () => {
  return (
    <main>
      <FontImport></FontImport>
      <title>Home Page</title>
      <NavbarHeader page="home"></NavbarHeader>
      <div className="page">
        <ArtGalleryContainer></ArtGalleryContainer>
      </div>
    </main>
  )
}

export default IndexPage
