import * as React from "react"
import "../styles/style.scss"
import { Helmet } from "react-helmet"


//Copycopy code to clipboard


class FontImport extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@600&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap" rel="stylesheet" />
                </Helmet>
            </div>
        )
    }
}

export default FontImport