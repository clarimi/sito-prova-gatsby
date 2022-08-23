
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
                        Ciao, se stai leggendo è perchè sei interessatǝ al progetto e a collaborare con noi, di questo ne siamo molto felici.✨ <br></br><br></br>
                        Di seguito troverai le specifiche più tecniche per il lavoro:<br></br>
                        Il formato richiesto per l’illustrazione è di <b>5906x8268 px</b>, a <b>300dpi</b>, in <b>RGB</b> in formato <b>PNG</b>.
                        Il formato fisico di riferimento corrisponde al <b>50x70 cm</b>.
                        <br></br><br></br>
                        Non ti devi preoccupare dell’impaginazione, ci pensiamo noi.
                        <br></br><br></br>
                        Ti chiediamo inoltre di scrivere una <b>breve descrizione</b> della tua copertina, in piena libertà: può contenere una citazione, qualche verso di una poesia, o un’interpretazione a parole tue legata all’opera. <br></br><br></br>
                        Per <b>collaborare</b> devi semplicemente inviarci una <b>e-mail</b> con la tua idea e, se ti va, due righe su di te. Presto ti invieremo tutto il materiale che ti servirà per realizzare il tuo lavoro.
                    </p>
                </div>
                <div className="collabora-partedue">
                    <h2 className="titolo-proprieta">
                        PROPRIETÁ</h2>
                    <p className="testo-proprieta">
                        La paternità dell’opera è sempre tua, la nostra intenzione nel futuro prossimo è aprire anche il sito web dove verrà pubblicata.
                        Se mai arriveremo ad aprire lo shop saremo felici di ricontattarti per le stampe.                     </p>
                    <div className="button-collabora-container">
                        <a href="mailto:the.veroneser@gmail.com" className="button-collabora">COLLABORA</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CollaboraPage
