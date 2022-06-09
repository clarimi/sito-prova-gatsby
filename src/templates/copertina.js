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
        descrizione {
            descrizione
        }
        titolo
        immagine {
            gatsbyImage(width: 360)
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
            <div className="page">
                <div className="copertina-dettaglio">
                    <div className="copertina-immagine" >
                        <GatsbyImage image={props.data.contentfulCopertina.immagine.gatsbyImage} alt={props.data.contentfulCopertina.titolo} loading="eager" />
                    </div>
                    <div className="copertina-info">
                        <h1>{props.data.contentfulCopertina.titolo}</h1>
                        <p>{props.data.contentfulCopertina.descrizione?.descrizione}</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Copertina