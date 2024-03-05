import React from 'react'
import './home.css'

function Home() {
    return (
        <main>
            <div className="home">
                <div className="home-card">
                    <div className="h1">

                        <h1>Hi there! I'm Anthony</h1>
                        <br></br>
                        <p>I'm a recent Grad from AUT</p>
                        <br></br>
                        <p>I'm looking for jobs in </p>
                        <br></br>
                        <h2>Software Development</h2>
                        <p>and</p>
                        <h2>IT Support</h2>
                    </div>

                    <a className="home-button-CV" href={"AnthonyYuen_CV_2024.pdf?url"} download="AnthonyYuen_CV_2024.pdf" target="_blank" rel="nooner noreferrer">
                        Download my CV
                    </a>

                </div>
            </div>
        </main>
    )
}

export default Home