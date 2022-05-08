
import * as React from "react"
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const copertine = [{
    title: "ISSUE 1",
    image: "copertina-1.png"
},{
    title: "ISSUE 2",
    image: "copertina-1.png"
},{
    title: "ISSUE 3",
    image: "copertina-1.png"

},
{
    title: "ISSUE 1",
    image: "copertina-1.png"
},{
    title: "ISSUE 2",
    image: "copertina-1.png"
},{
    title: "ISSUE 3",
    image: "copertina-1.png"

},
{
    title: "ISSUE 1",
    image: "copertina-1.png"
},{
    title: "ISSUE 2",
    image: "copertina-1.png"
},{
    title: "ISSUE 3",
    image: "copertina-1.png"

},
{
    title: "ISSUE 1",
    image: "copertina-1.png"
},{
    title: "ISSUE 2",
    image: "copertina-1.png"
},{
    title: "ISSUE 3",
    image: "copertina-1.png"

},
];

const colonna1 = copertine.filter((copertina, indice)=> (indice +1) % 3 == 1);
const colonna2 = copertine.filter((copertina, indice)=> (indice +1) % 3 == 2);
const colonna3 = copertine.filter((copertina, indice)=> (indice +1) % 3 == 0);



class ArtGallery extends React.Component {

    componentDidMount() {
        const colonne = 3;

        const setterColonne = []

        for (let index = 0; index < colonne; index++) {

            const nomeColonna = "#colonna-" + (index + 1)

            let translateYFrom = -1400;
            let translateYTo = 0;
            
            if(index == 1) {
                translateYFrom = 0;
                translateYTo = -1400;
            }
            gsap.fromTo(nomeColonna, 
                { // FROM
                    translateY: translateYFrom
                }, { // TO
                    translateY: translateYTo,
                    scrollTrigger:{
                        trigger: ".art-gallery-space", 
                        start: "top top", 
                        scrub: true,
                    }
                });

                setterColonne.push(gsap.quickSetter(nomeColonna, "skewY", "deg"))
                
        }

        let proxy = { skew: 0 },
        clamp = gsap.utils.clamp(-50, 50); // don't let the skew go beyond 20 degrees. 
    
        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => {
                        setterColonne.forEach(setter=>setter(proxy.skew))
                    }});
                }
            }
        });
    
        // make the right edge "stick" to the scroll bar. force3D: true improves performance
        gsap.set("#colonna-1", {transformOrigin: "right center", force3D: true});
        
    
        
       
    }

    render() {
      return (
        <div>
  
      <div className="art-gallery">
          <div className="art-gallery__column" id="colonna-1">
              <h2>Colonna 1</h2>
              {colonna1.map(copertina => (
                  <div className="copertina">
                      <img src={`../${copertina.image}`} />
                  </div>
              ))}
              
          </div>
  
          <div className="art-gallery__column" id="colonna-2">
              <h2>Colonna 2</h2>
              {colonna2.map(copertina => (
                  <div>
                      <img src={`../${copertina.image}`} />
                  </div>
              ))}
              
          </div>
  
          <div className="art-gallery__column" id="colonna-3">
              <h2>Colonna 3</h2>
              {colonna3.map(copertina => (
                  <div>
                      <img src={`../${copertina.image}`} />
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
