import React from "react"
import './contact.css'
import linkedin from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'
import email from '../assets/email-icon.svg'

function Contact() {
    return (

        <main>
            <h1>
                Contact
            </h1>
            <br></br>
            <section className="contact-card">

                <a href="mailto:ant.jo.yuen@gmail.com"><img src={email} alt="email-icon" /></a>
                <p>Flick me an Email: <a href="mailto:ant.jo.yuen@gmail.com">ant.jo.yuen@gmail.com</a></p>
                <br></br>
                <a href="https://github.com/An1honyY" target="_blank" rel="noopener noreferrer"><img src={github} alt="github-icon" /></a>
                <p>Check out my Github: <a href="https://github.com/An1honyY" rel="noopener noreferrer">https://github.com/An1honyY</a></p>
                <br></br>
                <a href="https://linkedin.com/in/anthony-yuen-089208229" target="_blank" rel="noopener noreferrer" className="linkedin"><img src={linkedin} alt="linkednin-icon" /></a>
                <p>Connect with me on LinkedIn: <a href="https://linkedin.com/in/anthony-yuen-089208229" rel="noopener noreferrer">https://www.linkedin.com/in/anthony-yuen-089208229/</a></p>
                <br></br>
                <br></br>


            </section>
        </main>
    )
}

export default Contact