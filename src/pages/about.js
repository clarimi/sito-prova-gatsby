
import * as React from "react"
import FontImport from "../components/FontImport"
import NavbarHeader from "../components/NavbarHeader"
import { animaPreloader } from "../scripts/preloader"


// markup
const AboutPage = () => {
  animaPreloader();
  return (
    <main>
      <title>
        About
      </title>
      <NavbarHeader></NavbarHeader>
      <FontImport></FontImport>
      <div className="page">
        <div className="manifesto">
          <h2 className="titolo-manifesto">
            MANIFESTO</h2>
          <p className="testo-manifesto">
            The Veroneser è un progetto artistico composto da copertine di una rivista che non esiste e che si ispira alle famose copertine illustrate della rivista americana The New Yorker.<br></br>
            L’obiettivo è rappresentare la città di Verona, quei suoi dettagli culturali, storici, artistici, culinari, con un tono umoristico, onirico, surreale, astratto ma soprattutto personale. Senza limiti nè regole.
            <br></br> <br></br> Ogni settimana verrà pubblicata una copertina originale, realizzata ogni volta da un* divers* artista
          </p>
        </div>

        <div className="artisti">
          <h2 className="titolo-artisti">
            ARTISTI</h2>
          <ul className="lista-artisti">
            <li>
              ✨ Giorgia Marzari
            </li>
            <li>
              📌 Elisa Martini
            </li>
            <li>
              🌱 Clarice Mirandola
            </li>
            <li>
              🌙 Mattia Corciulo
            </li>
            <li>
              📕 Matilde Mirandola
            </li>
            <li>
              🍃 Nicole Tecchio
            </li>
            <li>
              🫀 Alice Alessandria
            </li>
          </ul>
        </div>
      </div>

    </main >
  )
}

export default AboutPage
