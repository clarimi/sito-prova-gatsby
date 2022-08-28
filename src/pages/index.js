import * as React from "react"
import NavbarHeaderContainer from "../components/NavbarHeaderContainer"

import "../styles/style.scss"
import ArtGalleryContainer from "../components/ArtGalleryContainer"
import FontImport from "../components/FontImport"
import { Helmet } from "react-helmet"



// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta name="facebook-domain-verification" content="1vy2x83h5kk5c43v57ilpaywwznfb2" />
        <title> Home Page - The Veroneser</title>
      </Helmet>
      <FontImport></FontImport>
      <NavbarHeaderContainer page="home"></NavbarHeaderContainer>
      <div className="page">
        <ArtGalleryContainer></ArtGalleryContainer>
      </div>
    </main>
  )
}

export default IndexPage
