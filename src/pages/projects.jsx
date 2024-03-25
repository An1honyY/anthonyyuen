import React from "react"
import { Link } from "react-router-dom"
import './projects.css'
import stock from '../assets/stock.webp'

function Projects() {

    return (
        <main>
            <div className="work-in-progress-card">
                <h2>Coming Soon!</h2>
                <p>This is a work in Progress.
                    Check back later for updates</p>
            </div>
            <h1>
                Projects
            </h1>

            <p> Heres some of my projects</p>

            <div className="projects">
                <Link to="/projects/znake" className="project-card">
                    <img src={stock} />
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
                <div className="project-card">
                    <img src={stock} />
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
                </div>
                <div className="project-card">
                    <img src={stock} />
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
                </div>
                <div className="project-card">
                    <img src={stock} />
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