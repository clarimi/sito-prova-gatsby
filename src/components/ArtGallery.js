import * as React from "react";
import { gsap, Power1, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GatsbyImage } from "gatsby-plugin-image";
import { ScrollSmoother } from "./../ext-libs/ScrollSmoother";
import TransitionLink from 'gatsby-plugin-transition-link';
import { animaPreloader } from './../scripts/preloader';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother)



// Sto usando una classe
class ArtGallery extends React.Component {
    colonne = [];

    //dichiaro animazione dell'uscita da artgallery verso il dettaglio
    leaving() {
        gsap.to(".art-gallery", {
            opacity: 0,
            scale: 0.94,
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

        const colonne = 3;
        const spazioCopertina = 320;

        for (let index = 0; index < colonne; index++) {

            const nomeColonna = "#colonna-" + (index + 1)
            const elencoCopertineColonna = this.colonne[index];

            //la grandezza dello scroll si adatta in base a quante copertine ci sono nella colonna
            const maxY = -(spazioCopertina * elencoCopertineColonna.length);


            if (index === 1) {
                //animazione dopo il caricamento della colonna centrale
                gsap.set(nomeColonna, {
                    translateY: 150
                });

                gsap.from(nomeColonna, {
                    translateY: 300,
                    opacity: 0,
                    duration: 0.8,
                    ease: Power1.easeOut
                });

                //animazione dello scroll della colonna centrale
                gsap.fromTo(nomeColonna,
                    { // FROM
                        translateY: 150
                    }, { // TO
                    translateY: maxY,
                    scrollTrigger: {
                        trigger: ".art-gallery-space",
                        start: "top top",
                        scrub: 2
                    }
                }, {
                    delay: 0.8,
                    ease: Power4.easeOut
                });

            } else {
                //animazione colonne 0 e 2
                gsap.set(nomeColonna, {
                    translateY: maxY
                });

                gsap.from(nomeColonna, {
                    translateY: maxY - 150,
                    opacity: 0,
                    duration: 0.8,
                    ease: Power1.easeOut
                });

                //animazione dello scroll delle colonne 0 e 2
                gsap.fromTo(nomeColonna,
                    { // FROM
                        translateY: maxY
                    }, { // TO
                    translateY: 150,
                    scrollTrigger: {
                        trigger: ".art-gallery-space",
                        start: "top top",
                        scrub: 2
                    }
                }, {
                    delay: 0.8,
                    ease: Power4.easeOut
                });
            }
        }

        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".art-gallery__column", "rotateX", "deg"),
            clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

        ScrollTrigger.create({
            scrub: 4,
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / 1000);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, { skew: 0, duration: 0.8, ease: Power1.easeInOut, overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                }
            }
        });

        // make the right edge "stick" to the scroll bar. force3D: true improves performance
        gsap.set(".art-gallery__column", { transformOrigin: "right center", force3D: true });

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

        this.copertineDaCaricare = copertine.length;

        const colonna1 = copertine.filter((copertina, indice) => (indice + 1) % 3 === 1);
        const colonna2 = copertine.filter((copertina, indice) => (indice + 1) % 3 === 2);
        const colonna3 = copertine.filter((copertina, indice) => (indice + 1) % 3 === 0);
        this.colonne = [colonna1, colonna2, colonna3];

        return (
            <div id="smooth-wrapper">
                <div className="art-gallery" id="smooth-content">
                    <div className="art-gallery__column" id="colonna-1">
                        {colonna1.map((copertina, id) => (
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

                    <div className="art-gallery__column" id="colonna-2">
                        {colonna2.map((copertina, id) => (
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

                    <div className="art-gallery__column" id="colonna-3">
                        {colonna3.map((copertina, id) => (
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
                </div>
                <div className="art-gallery-space"></div>

            </div>
        )
    }
}

export default ArtGallery