import React from 'react';
import './znake.css';
import img1 from '../../assets/znake1.webp';
import img2 from '../../assets/znake2.webp';
import img3 from '../../assets/znake3.webp';
import img4 from '../../assets/znake4.webp';

const Znake = () => {
    return (
        <div className="znake">
            <h1>Znake</h1>
            <div className="znake-content">
                <section>
                    <h2>About</h2>
                    <p>
                        Znake is a Gaiju take of the classic snake game implemented using in Unity.
                        <br></br>
                        It's a fun and addictive game where the player controls a snake to eat food and grow longer. The objective is to avoid colliding with the walls and the snake's own body while growing as large as possible.
                        <br></br>
                        <br></br>
                        In our version there are added obstacles, enemies, and powerups to make the game more challenging.
                        <br></br>
                        Other features include health, stamina, and shooting mechanics.
                        <br></br>
                        Essential menu options such resolution and a volume slider give the user a more personalized experience.
                    </p>
                </section>
                <section>
                    <h2>Features I worked on</h2>
                    <ul>
                        <li>Constant Forward Movement</li>
                        <li>Keyboard Movement Input</li>
                        <li>Health Bar</li>
                        <li>Stamina Bar</li>
                        <li>Score Counter</li>
                        <li>Pause Menu</li>
                        <li>Sound Effects</li>
                        <li>Speed Powerup</li>
                    </ul>
                </section>
                <section>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>C#</li>
                        <li>Unity</li>
                        <li>Blender (Used by other team members)</li>
                    </ul>
                </section>
                <section>
                    <h2>Snapshots</h2>
                    <div className="znake-snapshots">
                        <img src={img1} alt="Znake gameplay snapshot 1" />
                        <img src={img2} alt="Znake gameplay snapshot 2" />
                        <img src={img3} alt="Znake gameplay snapshot 3" />
                        <img src={img4} alt="Znake gameplay snapshot 4" />
                    </div>
                </section>

                <section>
                    <h2>Github</h2>
                    <p>
                        Check out the Code Here: <a href="https://github.com/jenniferty/Znakes" target="_blank" rel="noopener noreferrer">https://github.com/jenniferty/Znakes</a>
                    </p>

                </section>
            </div>
        </div>
    );
};

export default Znake;