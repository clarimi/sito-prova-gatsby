import * as React from "react";
import { gsap, Power1, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GatsbyImage } from "gatsby-plugin-image";
import { ScrollSmoother } from "../ext-libs/ScrollSmoother";
import TransitionLink from 'gatsby-plugin-transition-link';
import { animaPreloader } from '../scripts/preloader';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother)



// Sto usando una classe
class ArtGalleryMobile extends React.Component {
    //dichiaro animazione dell'uscita da artgallery verso il dettaglio
    leaving() {
        gsap.to(".copertine-mobile-container", {
            opacity: 0,
            duration: 0.2,
            ease: Power1.easeIn
        })
    }
    //dichiaro animazione dell'entrata nel dettaglio copertina
    enteringCopertina() {
        gsap.from(".copertina-dettaglio", {
            translateY: 30,
            opacity: 0,
            duration: 0.4,
            ease: Power1.easeOut
        })
    }
    animaCopertine() {
        gsap.from(".copertine-mobile-container", {
            translateY: 150,
            opacity: 0,
            duration: 0.8,
            ease: Power1.easeOut
        });
    }

    componentDidMount() {
        var body = document.querySelector("body");
        if (body.classList.contains("preloader_active") === false) {
            this.animaCopertine();
        } else {
            animaPreloader(() => {
                this.animaCopertine();
            });
        }
    }

    render() {
        const copertine = this.props.data.allContentfulCopertina.edges;

        return (
            <div className="copertine-mobile-container">
                {copertine.map((copertina, id) => (
                    <TransitionLink key={id.toString()} exit={{
                        trigger: ({ exit, node }) => this.leaving(exit, node),
                        length: 1
                    }}
                        entry={{
                            trigger: ({ enter, node }) => this.enteringCopertina(enter, node),
                            length: 1,
                            delay: 0.6
                        }} to={`/copertina/${copertina.node.id}/`} className="copertina">
                        <GatsbyImage image={copertina.node.immagine.gatsbyImage} alt={copertina.node.titolo} loading="eager" />
                    </TransitionLink>
                ))}
            </div>
        );
    }
}

export default ArtGalleryMobile