
import * as React from "react"
import FontImport from "../components/FontImport"
import NavbarHeaderContainer from "../components/NavbarHeaderContainer"
import { animaPreloader } from "../scripts/preloader"
import { Helmet } from "react-helmet"



// markup
const CollaboraPage = () => {
    animaPreloader();
    return (
        <main>
            <NavbarHeaderContainer page="home"></NavbarHeaderContainer>
            <FontImport></FontImport>
            <Helmet>
                <title>Collabora - The Veroneser</title>
            </Helmet>

            <div className="page">
                <div className="collabora-parteuno">
                    <h2 className="titolo-specifiche">
                        SPECIFICHE</h2>
                    <p className="testo-specifiche">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa
                    </p>
                </div>
                <div className="collabora-partedue">
                    <h2 className="titolo-proprieta">
                        PROPRIETÁ</h2>
                    <p className="testo-proprieta">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa
                    </p>
                    <div className="button-collabora-container">
                        <a href="mailto:the.veroneser@gmail.com" className="button-collabora">COLLABORA</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CollaboraPage
