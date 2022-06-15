import React from "react"
import { graphql, Link } from "gatsby"
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
      allContentfulCopertina(sort: {fields: index, order: ASC}) {
        edges {
          node {
            id
          }
        }
      }
  }
`

const Copertina = props => {

    const elencoIdCopertine = props.data.allContentfulCopertina.edges.map((elemento) => {
        return elemento.node.id;
    });

    const indiceCopertinaAttuale = elencoIdCopertine.findIndex((id) => id === props.data.contentfulCopertina.id);

    const indiceProssimaCopertina = indiceCopertinaAttuale + 1;
    const indicePrecedenteCopertina = indiceCopertinaAttuale - 1;

    let idProssimaCopertina = null;
    let idPrecedenteCopertina = null;

    if (indiceProssimaCopertina < elencoIdCopertine.length) {
        idProssimaCopertina = elencoIdCopertine[indiceProssimaCopertina];
    }

    if (indicePrecedenteCopertina >= 0) {
        idPrecedenteCopertina = elencoIdCopertine[indicePrecedenteCopertina];
    }


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
                        <h4>sottotitolo</h4>
                        <p>{props.data.contentfulCopertina.descrizione?.descrizione}</p>
                    </div>
                </div>

                {idPrecedenteCopertina != null && (
                    <Link className="nav-link nav-link__prev" to={`/copertina/${idPrecedenteCopertina}/`} >prev</Link>
                )}

                {idProssimaCopertina != null && (
                    <Link className="nav-link nav-link__next" to={`/copertina/${idProssimaCopertina}/`} >next</Link>
                )}
            </div>
        </main>

    )
}

export default Copertina