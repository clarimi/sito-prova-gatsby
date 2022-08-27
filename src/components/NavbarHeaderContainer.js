import * as React from "react"
import "../styles/style.scss"
import { Helmet } from "react-helmet";
import { ethers } from "ethers";
import NavbarHeader from "../components/NavbarHeader"
import NavbarHeaderMobile from "../components/NavbarHeaderMobile"

//Copycopy code to clipboard


class NavbarHeaderContainer extends React.Component {
    isLoggedIn = false;

    accediAMetamask() {
        console.log("faccio cose");
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // MetaMask requires requesting permission to connect users accounts
        provider.send("eth_requestAccounts", []).then((accounts) => {
            console.log("Autenticato su MetaMask");
            console.log(accounts);
            // The MetaMask plugin also allows signing transactions to
            // send ether and pay to change state within the blockchain.
            // For this, you need the account signer...
            const signer = provider.getSigner();
            console.log("signer", signer);
            this.isLoggedIn = true;
            this.render();
        })


    }
    render() {

        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
        }

        return (
            <main>
                {!this.isLoggedIn && (
                    <button onClick={() => this.accediAMetamask()} className="metamask-login-btn">Accedi con MetaMask</button>
                )}
                {this.isLoggedIn && (
                    <a className="metamask-avatar">User avatar</a>
                )}
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