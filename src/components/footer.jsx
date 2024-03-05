import React from "react";
import "./footer.css";
import linkedin from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'
import email from '../assets/email-icon.svg'

function Footer() {
    function copyToClipboard() {
        const email = "ant.jo.yuen@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied to clipboard");
        });
    }

    return (
        <footer>
            <div className="triangle-border"></div>
            <div className="polygon-fill">
                <div className="content">
                    Thanks for Visiting!
                    <br></br>
                    <br></br>

                    Check out my other projects on GitHub
                    <br></br>
                    Or contact me via Email or LinkedIn
                </div>
                <div className="icons">
                    <a href="https://linkedin.com/in/anthony-yuen-089208229"><img src={linkedin} alt="linkednin-icon" /></a>
                    <a href="https://github.com/An1honyY"><img src={github} alt="github-icon" /></a>
                    <img src={email} alt="email-icon" onClick={copyToClipboard} />
                </div>

                <p className="copyright">
                    © 2024 Anthony Yuen. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer