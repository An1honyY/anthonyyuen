import "./footer.css";
import linkedin from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'
import email from '../assets/email-icon.svg'

function Footer() {
    

    return (
        <footer>
            <div className="border-invisible">
                <div className="border-triangle"></div>
            </div>
            <div className="content">
                <div className="polygon-fill">
                    Thanks for Visiting!
                    <br></br>
                    <br></br>

                    Check out my other projects on GitHub
                    <br></br>
                    Or contact me via Email or LinkedIn
                    <div className="icons">
                        <a href="https://linkedin.com/in/anthony-yuen-089208229" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkednin-icon" /></a>
                        <a href="https://github.com/An1honyY" target="_blank" rel="noopener noreferrer"><img src={github} alt="github-icon" /></a>
                        <a href="mailto:ant.jo.yuen@gmail.com"><img src={email} alt="email-icon" /></a>
                    </div>

                    <p className="copyright">
                        © 2025 Anthony Yuen. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer