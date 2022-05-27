import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import "../styles/style.scss"
import ArtGalleryContainer from "../components/ArtGalleryContainer"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


export const query = graphql`
  query($id: String!) {
    contentfulCopertina(id: {eq: $id}) {
        id
        descrizione
        titolo
        immagine {
            gatsbyImage(width: 600)
        }
      }
  }
`

const Copertina = props => {
    return (
        <main>
            <title>Home Page</title>
            <Navbar></Navbar>
            <h1>{props.data.contentfulCopertina.titolo}</h1>
            <GatsbyImage image={props.data.contentfulCopertina.immagine.gatsbyImage} alt={props.data.contentfulCopertina.titolo} loading="eager" />
        </main>

    )
}

export default Copertina