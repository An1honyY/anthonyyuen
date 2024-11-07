import React from "react"
import { Link } from "react-router-dom"
import './projects.css'
import znake_img from '../assets/znake1.webp'
import fingerprint_img from '../assets/fingerprint1.webp'
import toothmate_img from '../assets/toothmate1.webp'
import portfolio_img from '../assets/portfolio1.webp'
import press_img from '../assets/press.svg'

function Projects() {

    return (
        <main>
            <h1>
                Projects
            </h1>

            <p> Here's some of my projects.
                <br></br>
                <img src={press_img} /> 
                Click through for more details.
            </p>

            <div className="projects">
                <Link to="/projects/znake" className="project-card">
                    <img src={znake_img} />
                    <div className="project-card-text">
                        <h2>Znake</h2>
                        <p>A 3D Gaiju style snake game made in Unity.</p>
                        <br></br>
                        <p>Agile Methodology: Scrum</p>
                        <p>Role: Scrum Master, Developer</p>
                        <p>Team Members: 5</p>
                        <p>Language: C#</p>
                        <p>Framework: Unity</p>
                    </div>
                </Link>
                <Link to="/projects/fingerprint" className="project-card">
                    <img src={fingerprint_img} />
                    <div className="project-card-text">
                        <h2>Fingerprint Attendance</h2>
                        <p>An IoT Fingerprint Attendance prototype using a Raspberry Pi, Adafruit fingerprint sensor and Sunfounder Components.</p>
                        <br></br>
                        <p>Role: Team Leader</p>
                        <p>Team Members: 3</p>
                        <p>Language: Python</p>
                        <p>IoT Platform: AWS (IoT Core, IoT Analytics, S3, QuickSight)</p>
                        <p>Web Protocol: MQTT</p>
                    </div>
                </Link>
                <Link to="/projects/toothmate" className="project-card">
                    <img src={toothmate_img} />
                    <div className="project-card-text">
                        <h2>Tooth Mate</h2>
                        <p>A year long Research and Development paper culminating in the development of a Dental Web App prototype made in React.js.</p>
                        <br></br>
                        <p>Agile Methodology: Feature Driven Development</p>
                        <p>Role: Frontend Developer</p>
                        <p>Team Members: 5</p>
                        <p>Language: JavaScript, HTML, CSS</p>
                        <p>Framework: React.js</p>
                    </div>
                </Link>
                <div className="project-card">
                    <img src={portfolio_img} />
                    <div className="project-card-text">
                        <h2>This Website</h2>
                        <p>A portfolio website to present myself in an interactive and visual format.</p>
                        <br></br>
                        <p>Language: Javascript, HTML, CSS</p>
                        <p>Framework: React.js</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects