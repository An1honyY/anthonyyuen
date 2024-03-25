import React from 'react';
import './znake.css';

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
                    It is a fun and addictive game where the player controls a snake to eat food and grow longer. The objective is to avoid colliding with the walls, obstacles, enemies and the snake's own body.
                </p>
            </section>
            <section>
                <h2>Features</h2>
                <ul>
                    <li>Score tracking</li>
                    <li>Levels of increasing difficulty</li>
                    <li>Sound effects</li>
                    <li>3D graphics</li>
                    <li>Power-ups</li>
                    <li>Enemies</li>
                    <li>Stamina</li>
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
                <h2>Github</h2>
                <p>
                    Check out the code here: https://github.com/jenniferty/Znakes
                </p>
                
            </section>
            <section>
                <h2>Play Now</h2>
                <p>
                    You can download the game here:...
                </p>
            </section>
            </div>
        </div>
    );
};

export default Znake;