import './seesafe.css';
import img1 from '../../assets/znake1.webp';
import img2 from '../../assets/znake2.webp';
import img3 from '../../assets/znake3.webp';
import img4 from '../../assets/znake4.webp';

const SeeSafe = () => {
    return (
        <div className="seesafe">
            <h1>SeeSafe</h1>
            <div className="seesafe-content">
                <section>
                    <h2>About</h2>
                    <p>
                        SeeSafe is a community safety app designed to improve the sharing and tracking of safety incidents.
                        <br></br>
                        It bridges the gap between citizens, verified community members, and authorities.
                        <br></br>
                        <br></br>
                        Built using a modern MERN + Expo architecture, SeeSafe combines real-time mapping, role-based access control, cloud-based moderation, and cross-platform support (Web + Mobile) to deliver a scalable and secure public-safety solution..
                        <br></br>
                        Other features include health, stamina, and shooting mechanics.
                        <br></br>
                        Essential menu options such resolution and a volume slider give the user a more personalized experience.
                    </p>
                </section>

                <section>
                <h1>Key Features</h1>
                    <h2>Community Hub</h2>
                    <ul>
                        <li><strong>Incident Reporting</strong> – Users can create safety posts with category, description, media, and geolocation.</li>
                        <li><strong>Community Moderation</strong> – Posts can be reported, reviewed, resolved, or taken down by authorities.</li>
                        <li><strong>Self Resolution</strong> – Post authors can mark incidents as resolved once the issue is no longer active.</li>
                        <li><strong>Community Engagement</strong> – Comments and petitions enable collaborative problem reporting.</li>
                    </ul>

                    <h2>Interactive Safety Map</h2>
                    <ul>
                        <li><strong>Incident Visualisation</strong> – All posts appear as map markers with risk-based styling.</li>
                        <li><strong>Heatmaps &amp; Hotspots</strong> – Aggregated incident data highlights unsafe zones.</li>
                        <li><strong>Time-Based Filtering</strong> – Filter incidents by time without affecting safety-weighted routing.</li>
                        <li><strong>Safe Route Planning</strong> – Routes account for nearby incident risk levels.</li>
                        <li><strong>Live Route Sharing</strong> – Share real-time routes through a generated URL.</li>
                    </ul>

                    <h2>Alerts &amp; Emergency Support</h2>
                    <ul>
                        <li><strong>Official Alerts</strong> – Council, police, and transport alerts (e.g., AT HOP).</li>
                        <li><strong>Risk Notifications</strong> – Alerts triggered by high-risk incidents nearby.</li>
                        <li><strong>SOS Features</strong> – Quick-access emergency actions embedded in the UI.</li>
                    </ul>
                
                    <h2>Verification &amp; Security</h2>
                    <ul>
                        <li><strong>Authentication</strong> – Secure login using AWS Cognito.</li>
                        <li><strong>Role-Based Access Control (RBAC)</strong> – Permission-based access for different user types.</li>
                        <li><strong>Authority ID Verification</strong> – OCR-based verification using AWS Textract.</li>
                        <li><strong>Media Moderation</strong> – Automated image moderation using AWS Rekognition.</li>
                    </ul>
                
                    <h2>User Roles</h2>
                    <ul>
                        <li><strong>REGULAR</strong> – View posts, maps, and alerts.</li>
                        <li><strong>VERIFIED</strong> – Create community posts and engage more actively.</li>
                        <li><strong>AUTHORITY</strong> – Moderate posts, resolve incidents, and manage safety data.</li>
                        <li><strong>ADMIN</strong> – Approve authority requests and oversee the platform.</li>
                    </ul>
                </section>

                <section>
                    <h2>Tech Stack</h2>
                    <ul>
                        <li><strong>Backend</strong> – Node.js, Express.js, TypeScript, MongoDB (Mongoose)</li>
                        <li><strong>Frontend</strong> – React Native (Expo), Expo Router, TypeScript</li>
                        <li><strong>Mapping</strong> – Mapbox (Web &amp; Native)</li>
                        <li><strong>Authentication</strong> – AWS Cognito</li>
                    </ul>
                </section>

                <section>
                    <h2>Cloud Services</h2>
                    <ul>
                        <li><strong>AWS S3</strong> – Media storage</li>
                        <li><strong>AWS Rekognition</strong> – Image moderation</li>
                        <li><strong>AWS Textract</strong> – OCR for authority ID verification</li>
                        <li><strong>AWS SNS / Polly / Transcribe</strong> – Notifications &amp; accessibility</li>
                    </ul>
                </section>

                <section>
                    <h2>Deployment &amp; Testing</h2>
                    <ul>
                        <li><strong>AWS App Runner</strong> – Backend deployment</li>
                        <li><strong>AWS Amplify</strong> – Web deployment</li>
                        <li><strong>Testing</strong> – Jest (Unit &amp; Integration)</li>
                    </ul>
                </section>
                <section>
                    <h2>What I worked on</h2>
                    <ul>
                        <li>Figma UI design</li>
                        <li>Navigation Bar</li>
                        <li>Opening a Post and Comments</li>
                        <li>Alerts Feed - Police News</li>
                        <li>Serverless Function to bypass CORS and cache Police News</li>
                        <li>Android Push Notifications</li>
                        <li>Alerts Filter</li>
                        <li>And a load of bug fixes</li>
                    </ul>
                </section>
                <section>
                    <h2>Other Technologies I Used</h2>
                    <ul>
                        <li>Figma</li>
                        <li>Cloudflare Worker</li>
                        <li>Firebase Cloud Messaging</li>
                        <li>Github Copilot</li>
                    </ul>
                </section>
                <section>
                    <h2>Snapshots</h2>
                    <div className="seesafe-snapshots">
                        <img src={img1} alt="Znake gameplay snapshot 1" />
                        <img src={img2} alt="Znake gameplay snapshot 2" />
                        <img src={img3} alt="Znake gameplay snapshot 3" />
                        <img src={img4} alt="Znake gameplay snapshot 4" />
                    </div>
                </section>

                <section>
                    <h2>Github</h2>
                    <p> Unfortunately this repository is private so this link won't work for you... but it will for me :)</p>
                    <p>
                        Check out the code here: <a href="https://github.com/CS778-LY-2025-Consulting-Challenge/SeeSafe" target="_blank" rel="noopener noreferrer">https://github.com/CS778-LY-2025-Consulting-Challenge/SeeSafe</a>
                    </p>

                </section>
            </div>
        </div>
    );
};

export default SeeSafe;