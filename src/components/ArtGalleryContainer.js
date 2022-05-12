
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import ArtGallery from "./ArtGallery"


// markup
const ArtGalleryContainer = () => {
    const copertineData = useStaticQuery(graphql`
    query MyQuery {
        allContentfulCopertina {
        edges {
            node {
            id
            titolo
            descrizione
            immagine {
                gatsbyImage(width: 360)
            }
            }
        }
        }
    }`);

    return (
        <ArtGallery data={copertineData}></ArtGallery>
    )
}

export default ArtGalleryContainer
