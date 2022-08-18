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
                    <link rel="apple-touch-icon" sizes="57x57" href="../images/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="../images/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="../images/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="../images/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="../images/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="../images/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="../images/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="../images/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="../images/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png" />
                    <link rel="manifest" href="../images/favicon/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="../images/favicon/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Helmet>
            </div>
        )
    }
}

export default FontImport