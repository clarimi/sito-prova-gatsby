
import * as React from "react"
import TransitionLink from 'gatsby-plugin-transition-link';
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import logo from '../images/logoveroneser.svg'


// Sto usando una funzione
class NavbarHeaderMobile extends React.Component {
    menuAperto = false;
    leaving() {
        gsap.to("#menu-mobile", {
            top: -200,
            duration: 0.2,
            ease: Power1.easeInOut
        });

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
        gsap.from(".page", {
            translateY: 30,
            opacity: 0,
            duration: 0.4,
            ease: Power1.easeOut
        })
    }

    componentDidMount() {
    }

    apriChiudiMenu() {

        if (this.menuAperto == false) {
            gsap.to("#menu-mobile", {
                top: 0,
                duration: 0.2,
                ease: Power1.easeInOut
            });
            this.menuAperto = true;
            gsap.set("#burger-menu", {
                className: 'menu--open'
            });
        } else {
            gsap.to("#menu-mobile", {
                top: -200,
                duration: 0.2,
                ease: Power1.easeInOut
            });
            this.menuAperto = false;
            gsap.set("#burger-menu", {
                className: ''
            });
        }

    }


    render() {
        return (
            <header id="header-mobile">
                <TransitionLink exit={{
                    trigger: () => this.leaving(),
                    length: 1
                }} entry={{
                    trigger: () => this.enteringInHome(),
                    length: 1,
                    delay: 0.6
                }} to="/" className="logo-image" ><img alt="Logo The Veroneser" src={logo} className="logo" /></TransitionLink>
                <div id='burger-menu' onClick={() => this.apriChiudiMenu()}>
                    <div className='menu-line1'></div>
                    <div className='menu-line2'></div>
                </div>
                <div id="menu-mobile">
                    <ul>
                        <li><TransitionLink exit={{
                            trigger: () => this.leaving(),
                            length: 1
                        }}
                            entry={{
                                trigger: () => this.entering(),
                                length: 1,
                                delay: 0.6
                            }} to="/about" className="link-navbar">ABOUT</TransitionLink></li>
                        <li>
                            <TransitionLink exit={{
                                trigger: () => this.leaving(),
                                length: 1
                            }}
                                entry={{
                                    trigger: () => this.entering(),
                                    length: 1,
                                    delay: 0.6
                                }} to="/collabora" className="link-navbar">COLLABORA</TransitionLink>
                        </li>
                    </ul>
                </div>
            </header >

        )
    }
}




export default NavbarHeaderMobile