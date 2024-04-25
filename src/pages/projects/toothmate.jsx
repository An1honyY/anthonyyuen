import React from 'react';
import './toothmate.css';
import img1 from '../../assets/toothmate1.webp';
import img2 from '../../assets/toothmate2.webp';
import img3 from '../../assets/toothmate3.webp';
import img4 from '../../assets/toothmate4.webp';
import img5 from '../../assets/toothmate5.webp';

const Toothmate = () => {
    return (
        <div className="toothmate">
            <h1>Tooth-Mate Dental Software</h1>
            <div className="toothmate-content">
                <section>
                    <h2>About</h2>
                    <p>
                        This Dental Web App is for Dentists to manage patient's dental information, appointment notes, and tooth charting.
                        <br></br>
                        This App aims to be more modern, efficient and user friendly than current solutions in use.
                        <br></br>
                        <br></br>
                        For this project, our team was tasked to continue progess of development on a client's brainchild app ecosystem.
                        <br></br>
                        Our goal was to create a prototype CRM with a Dental Tool Software to connect to their patient facing mobile app.
                        <br></br>
                        Due to time constraints, we opted for an opensource browser based CRM - SuiteCRM v7.13.2 which we modified for use in a dental clinic,
                        creating separate access roles and limiting functionality to relevant features like a Calendar and Appointment Booking.
                        <br></br>
                        We attached the Dental Tool Software by link to avoid licensing issues.
                    </p>
                </section>
                <section>
                    <h2>Frontend Features I worked on</h2>
                    <ul>
                        <li>UI Components</li>
                        <li>Content Display</li>
                        <li>Content Switching</li>
                        <li>Draggable Popup Windows</li>
                        <li>Scrollable Info Containers</li>
                        <li>Styling</li>
                    </ul>
                </section>

                <section>
                    <h2>Finished Functionality</h2>
                    <ul>
                        <li>User-friendly interface</li>
                        <li>Appointment management system</li>
                        <li>Treatment planning capabilities</li>
                        <li>Role-based user permissions</li>
                    </ul>

                    <h3>Uncomplete Features</h3>
                    <ul>
                        <li>Voice to Text (open source options were too slow and inaccurate during testing)</li>
                        <li>Data Export Functionality and mobile app Connectivity</li>
                        <li>Tooth Model Coloured Treatment Surfaces</li>
                        <li>Periodontal Charting</li>
                        <li>X-ray Image Gallery</li>
                    </ul>
                </section>
                <section>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>React.js</li>
                        <li>HTML & CSS</li>
                        <br></br>
                        Others used by other teammates:
                        <li>MySQL</li>
                        <li>Blender</li>
                        <li>Three.js</li>
                    </ul>
                </section>
                <section>
                    <h2>Snapshots</h2>
                    <div className="toothmate-snapshots">
                        <img src={img1} alt="toothmate snapshot 1" />
                        <img src={img2} alt="toothmate snapshot 2" />
                        <img src={img3} alt="toothmate snapshot 3" />
                        <img src={img4} alt="toothmate snapshot 4" />
                        <img src={img5} alt="toothmate snapshot 5" />
                    </div>
                </section>

                <section>
                    <h2>Github</h2>
                    <p>
                        Check out the Code Here: <a href="https://github.com/huneybadger101/Tooth-Mate" target="_blank" rel="noopener noreferrer">https://github.com/huneybadger101/Tooth-Mate</a>
                    </p>
                    <p>
                        Check out the CRM Code Here: <a href="https://github.com/huneybadger101/SuiteCRM-7.13.2" target="_blank" rel="noopener noreferrer">https://github.com/huneybadger101/SuiteCRM-7.13.2</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Toothmate;