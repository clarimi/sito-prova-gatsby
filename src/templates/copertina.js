import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/style.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import FontImport from "../components/FontImport"
import { animaPreloader } from './../scripts/preloader';
import NavbarHeaderContainer from "../components/NavbarHeaderContainer"
import { Helmet } from "react-helmet"

export const query = graphql`
  query($id: String!) {
    contentfulCopertina(id: {eq: $id}) {
        id
        descrizione {
            descrizione
        }
        titolo
        sottotitolo
        openseaLink {
            id
            openseaLink
        }
        immagine {
            gatsbyImage(width: 360, formats: PNG, breakpoints:[360])
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
// ordine delle copertine in base a index
const Copertina = props => {
    animaPreloader();

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
            <Helmet>
                <title>{props.data.contentfulCopertina.titolo} - The Veroneser</title>
            </Helmet>
            <NavbarHeaderContainer page="home"></NavbarHeaderContainer>
            <FontImport></FontImport>
            <div className="page">
                <div className="copertina-dettaglio">
                    <div className="copertina-immagine" >
                        <GatsbyImage image={props.data.contentfulCopertina.immagine.gatsbyImage} alt={props.data.contentfulCopertina.titolo} loading="eager" />
                    </div>
                    <div className="copertina-info">
                        <h1>{props.data.contentfulCopertina.titolo}</h1>
                        <h4>{props.data.contentfulCopertina.sottotitolo}</h4>
                        <p>{props.data.contentfulCopertina.descrizione?.descrizione}</p>
                        {props.data.contentfulCopertina?.openseaLink != null && (
                            <a href={props.data.contentfulCopertina?.openseaLink?.openseaLink} title="Compra su OpenSea" class="opensea-btn" target="_blank"><img src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20BW.png" alt="Disponibile su OpenSea" /></a>
                        )}
                    </div>
                </div>


                {idPrecedenteCopertina != null && (
                    <Link className="nav-link nav-link__prev" to={`/copertina/${idPrecedenteCopertina}/`} >
                        <span className="no-mobile">prev</span>
                        <span className="si-mobile">❮</span>
                    </Link>
                )}

                {idProssimaCopertina != null && (
                    <Link className="nav-link nav-link__next" to={`/copertina/${idProssimaCopertina}/`} >
                        <span className="no-mobile">next</span>
                        <span className="si-mobile">❯</span>
                    </Link>
                )}
            </div>
        </main>

    )
}

export default Copertina