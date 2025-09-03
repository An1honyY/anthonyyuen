import './contact.css'
import linkedin from '../assets/linkedin-icon-black.svg'
import github from '../assets/github-icon-black.svg'
import email from '../assets/email-icon-black.svg'

function Contact() {
    return (

        <main>
            <h1 className={"contact-title"}>
                Contact
            </h1>
            <br></br>
            <section className="contact-card">
                <a href="mailto:ant.jo.yuen@gmail.com">
                    <div className={"card"}>
                        <img src={email} alt="email-icon"/>
                        <h2>Flick me an Email: </h2><p>ant.jo.yuen@gmail.com</p>
                    </div>
                </a>
                <br></br>

                <a href="https://github.com/An1honyY" target="_blank" rel="noopener noreferrer">
                    <div className={"card"}>
                        <img src={github}
                             alt="github-icon"/>
                        <h2>Check out my Github: </h2><p>https://github.com/An1honyY</p>
                    </div>
                </a>
                <br></br>

                <a href="https://www.linkedin.com/in/anthonyyuen-dev/" target="_blank" rel="noopener noreferrer">
                    <div className={"card"}>
                        {/*classname linkedin required to make sure svg is aligned*/}
                        <img className={"linkedin"} src={linkedin} alt="linkednin-icon"/>
                        <h2>Connect with me on LinkedIn: </h2><p>https://www.linkedin.com/in/anthonyyuen-dev/</p>
                    </div>
                </a>


            </section>
        </main>
    )
}

export default Contact