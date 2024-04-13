import React from 'react';
import './fingerprint.css';
import img1 from '../../assets/fingerprint1.webp';
import img2 from '../../assets/fingerprint2.webp';
import img3 from '../../assets/fingerprint3.webp';
import img4 from '../../assets/fingerprint4.webp';

const Fingerprint = () => {
    return (
        <div className="fingerprint">
            <h1>Fingerprint Attendance</h1>
            <div className="fingerprint-content">
                <section>
                    <h2>About</h2>
                    <p>
                        This Fingerprint Attendance system was designed to make attendance taking faster and more accurate.
                        <br></br>
                        Our typical attendance system at AUT is handing out a list of names to sign. This can take a long time to make it around the room. Additionally, names may easily be, mistakenly or intentionally, signed by someone else. 
                        <br></br>
                        <br></br>
                        This proof of concept prototype was able to register new fingerprints, recognise authorised/unauthorised sign-in attempts, and record them in an AWS database.
                        <br></br>
                        The registration process required a monitor and keyboard to navigate the command-line program.
                        <br></br>
                        Then the systems sign-in script can be activated by either triggering the motion or touch sensor.
                        <br></br>
                        An RGB LED indicates the systems status. Blue when active, Red when a scan is not found or read incorrectly, and Green when a successful sign-in is made.
                    </p>
                </section>
                <section>
                    <h2>Hardware</h2>
                    <ul>
                        <li>Raspberry Pi 3B+</li>
                        <li>Adafruit T-Cobbler Plus 40 pin expansion edges + Breadboard</li>
                        <li>Adafruit 4690 Fingerprint Sensor</li>
                        <li>Sunfounder IR Obstacle Motion Sensor</li>
                        <li>Sunfounder Touch Switch</li>
                        <li>Sunfounder RGB LED</li>
                        <li>TP-LINK TL-WN722N Wi-Fi</li>
                        <li>Jumper Cables</li>
                    </ul>
                </section>
                <section>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>Python</li>
                        <li>MQTT</li>
                        <li>AWS:</li>
                        <li> (IoT Core to receive connection and message)</li>
                        <li>(IoT Analytics to manage and manipulate data)</li>
                        <li>(S3 to store data)</li>
                        <li>(Quicksight to visualise data)</li>
                    </ul>
                </section>
                <section>
                    <h2>Snapshots</h2>
                    <div className="fingerprint-snapshots">
                        <img src={img1} alt="fingerprint snapshot 1" />
                        <img src={img2} alt="fingerprint snapshot 2" />
                        <img src={img3} alt="fingerprint snapshot 3" />
                        <img src={img4} alt="fingerprint snapshot 4" />
                    </div>
                </section>

                <section>
                    <h2>Github</h2>
                    <p>
                        Check out the Code Here: <a href="" target="_blank" rel="noopener noreferrer">https://github.com/</a>
                    </p>

                </section>

                <section>
                    <h2>Video Demo</h2>
                    <p>
                        Check out a Video Demo Here: <a href="https://www.youtube.com/watch?v=shYQndpJynU" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=shYQndpJynU</a>
                    </p>

                </section>
            </div>
        </div>
    );
};

export default Fingerprint;