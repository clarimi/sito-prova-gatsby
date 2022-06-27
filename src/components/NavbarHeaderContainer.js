import * as React from "react"
import "../styles/style.scss"
import { Helmet } from "react-helmet"
import NavbarHeader from "../components/NavbarHeader"
import NavbarHeaderMobile from "../components/NavbarHeaderMobile"

//Copycopy code to clipboard


class NavbarHeaderContainer extends React.Component {
    render() {
        return (
            <main>
                <div className="no-mobile">
                    <NavbarHeader></NavbarHeader>
                </div>
                <div className="si-mobile">
                    <NavbarHeaderMobile className></NavbarHeaderMobile>
                </div>
            </main>

        )
    }
}

export default NavbarHeaderContainer