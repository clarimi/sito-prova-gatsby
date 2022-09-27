
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import ArtGallery from "./ArtGallery"
import ArtGalleryMobile from "./ArtGalleryMobile"


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
                gatsbyImage(width: 260, formats: PNG, breakpoints:[260])
              }
            }
          }
        }
      }`);

    return (
        <main>
            <div className="si-mobile">
                <ArtGalleryMobile data={copertineData} className="si-mobile"></ArtGalleryMobile>
            </div>
            <div className="no-mobile">
                <ArtGallery data={copertineData} className="si-mobile"></ArtGallery>
            </div>
        </main>
    )
}

export default ArtGalleryContainer
