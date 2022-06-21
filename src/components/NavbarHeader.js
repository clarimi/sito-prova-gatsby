
import * as React from "react"
import TransitionLink from 'gatsby-plugin-transition-link';
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import logo from '../images/logoveroneser.svg'


// Sto usando una funzione
class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  leaving() {
    console.log("leaving home")
    if (this.props.page && this.props.page === "home") {
      gsap.to(".art-gallery", {
        opacity: 0,
        scale: 0.94,
        duration: 0.2,
        ease: Power1.easeIn
      });
    } else {
      gsap.to(".page", {
        opacity: 0,
        scale: 0.94,
        duration: 0.2,
        ease: Power1.easeIn
      })
    }


  }

  enteringInHome() {
    gsap.from(".page", {
      opacity: 0,
      duration: 0,
      ease: Power1.easeOut
    })
  }

  entering() {
    console.log("entering")
    gsap.from(".page", {
      translateY: 30,
      opacity: 0,
      duration: 0.4,
      ease: Power1.easeOut
    })
  }

  componentDidMount() {







    let logoMostrato = true;

    ScrollTrigger.create({
      onUpdate: (self) => {


        const soglia = 0.01;

        if (self.progress > soglia && logoMostrato === true) {
          gsap.to(".logo-image", {
            translateY: -50,
            duration: 0.15,
            opacity: 0
          });
          logoMostrato = false;
        }

        if (self.progress < soglia && logoMostrato === false) {
          gsap.to(".logo-image", {
            translateY: 0,
            duration: 0.15,
            opacity: 1,
            delay: 1,
          });
          logoMostrato = true;
        }
      }
    });

  }
  render() {
    return (
      <header className="header">
        <TransitionLink exit={{
          trigger: () => this.leaving(),
          length: 1
        }}
          entry={{
            trigger: () => this.entering(),
            length: 1,
            delay: 0.6
          }} to="/about" className="link-navbar">ABOUT</TransitionLink>

        <TransitionLink exit={{
          trigger: () => this.leaving(),
          length: 1
        }} entry={{
          trigger: () => this.enteringInHome(),
          length: 1,
          delay: 0.6
        }} to="/" className="logo-image" ><img alt="Logo The Veroneser" src={logo} className="logo" /></TransitionLink>

        <TransitionLink exit={{
          trigger: () => this.leaving(),
          length: 1
        }}
          entry={{
            trigger: () => this.entering(),
            length: 1,
            delay: 0.6
          }} to="/collabora" className="link-navbar">COLLABORA</TransitionLink>
      </header>
    )
  }
}




export default NavbarHeader