import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import "../styles/style.scss"
import ArtGalleryContainer from "../components/ArtGalleryContainer"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import FontImport from "../components/FontImport"


export const query = graphql`
  query($id: String!) {
    contentfulCopertina(id: {eq: $id}) {
        id
        descrizione
        titolo
        immagine {
            gatsbyImage(width: 400)
        }
      }
  }
`

const Copertina = props => {
    return (
        <main>
            <title>Home Page</title>
            <Navbar></Navbar>
            <FontImport></FontImport>
            <h1>{props.data.contentfulCopertina.titolo}</h1>
            <p>{props.data.contentfulCopertina.descrizione}</p>
            <GatsbyImage image={props.data.contentfulCopertina.immagine.gatsbyImage} alt={props.data.contentfulCopertina.titolo} loading="eager" />
        </main>

    )
}

export default Copertina