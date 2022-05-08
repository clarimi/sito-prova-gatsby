
import * as React from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




class ArtGallery extends React.Component {

    componentDidMount() {
        const colonne = 3;


        for (let index = 0; index < colonne; index++) {

            const nomeColonna = "#colonna-" + (index + 1)

            let translateYFrom = -1400;
            let translateYTo = 0;

            if (index == 1) {
                translateYFrom = 0;
                translateYTo = -1400;
            }
            gsap.fromTo(nomeColonna,
                { // FROM
                    translateY: translateYFrom
                }, { // TO
                translateY: translateYTo,
                scrollTrigger: {
                    trigger: ".art-gallery-space",
                    start: "top top",
                    scrub: true,
                }
            });



        }

        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".art-gallery__column", "rotateX", "deg"),
            clamp = gsap.utils.clamp(-12, 12); // don't let the skew go beyond 20 degrees. 

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / 2000);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                }
            }
        });

        // make the right edge "stick" to the scroll bar. force3D: true improves performance
        gsap.set(".art-gallery__column", { transformOrigin: "right center", force3D: true });




    }

    render() {

        const data = this.props.data;

        const copertine = this.props.data.allContentfulCopertina.edges;

        const colonna1 = copertine.filter((copertina, indice) => (indice + 1) % 3 == 1);
        const colonna2 = copertine.filter((copertina, indice) => (indice + 1) % 3 == 2);
        const colonna3 = copertine.filter((copertina, indice) => (indice + 1) % 3 == 0);


        const datiDiContentfulPuliti = this.props.data.allContentfulCopertina.edges;

        const frutta = datiDiContentfulPuliti;

        frutta.map((value, index) => {
            console.log(value, index);
        });


        console.log(colonna1)

        return (
            <div>
                <div className="art-gallery">
                    <div className="art-gallery__column" id="colonna-1">
                        <h2>Colonna 1</h2>
                        {colonna1.map(copertina => (
                            <div className="copertina">
                                <img src={copertina.node.immagine.publicUrl} />
                            </div>
                        ))}

                    </div>

                    <div className="art-gallery__column" id="colonna-2">
                        <h2>Colonna 2</h2>
                        {colonna2.map(copertina => (
                            <div>
                                <img src={copertina.node.immagine.publicUrl} />
                            </div>
                        ))}

                    </div>

                    <div className="art-gallery__column" id="colonna-3">
                        <h2>Colonna 3</h2>
                        {colonna3.map(copertina => (
                            <div>
                                <img src={copertina.node.immagine.publicUrl} />
                            </div>
                        ))}

                    </div>


                    <div></div>
                    <div></div>
                </div>
                <div className="art-gallery-space"></div>

            </div>
        )
    }
}

export default ArtGallery
