
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import ArtGallery from "./ArtGallery"


// markup
const ArtGalleryContainer = () => {
    const copertineData = useStaticQuery(graphql`
    query QueryTutteCopertine {
        allContentfulCopertina(sort: {fields: index, order: ASC}) {
        edges {
            node {
            id
            titolo
            immagine {
                gatsbyImage(
                    width: 260
                )
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
