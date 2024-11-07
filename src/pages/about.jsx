import React from "react"
import './about.css'
import diploma_img from '../assets/diploma.svg'
import grad_img from '../assets/grad.svg'
import java_img from '../assets/java.svg'
import python_img from '../assets/python.svg'
import react_img from '../assets/react.svg'
import shears_img from '../assets/shears.svg'
import violin_img from '../assets/violin.svg'
import group_img from '../assets/group.svg'
import webdev_img from '../assets/webdev.svg'

function About() {
    return (
        <main>
            <h1>
                About
            </h1>
            <br></br>
            <section className="about-card">
                <h3>Who am I?</h3>
                <p>I'm a motivated job seeker with an academic background in IT.</p>
                <p>Roles I'd be best fit for are Helpdesk Support and Software Developer.</p> 
                <br></br>
                <p>However, I'm interested in any entry-level job offers.</p> 
                <p>I'm based in Auckland, with a Restricted Drivers License.</p>
                <h3>Background</h3>
                <br></br>
                <p>I attended Auckland University of Technology.</p>
                <p>I gained a Bachelors of Computer and Information Sciences in Digital Services and Software Development.</p>
                <br></br>
                <img src={diploma_img}></img>
                <img src={grad_img}></img>
                <br></br>
                <br></br>
                <p>I gained experience in Game, IoT and Web development, using languages such as Java, C#, Python, PHP and React.js. </p>
                <p>I was also given the chance to learn concepts such as the ITIL framework for services, needs analysis and security management.</p>
                <br></br>
                <img src={java_img}></img>
                <img src={python_img}></img>
                <img src={react_img}></img>
                <br></br>
                <br></br>
                <p>My studies involved various team-based projects to give me practical soft skills - Problem Solving, Communication and Teamwork.</p>
                <p>Job experience includes part-time gardening and violin tutoring, which have built up my tenacity and people patience.</p>
                <br></br>
                <img src={group_img}></img>
                <img src={shears_img}></img>
                <img src={violin_img}></img>
                <br></br>
                <br></br>
                <p>At the moment I'm practising Web development.</p>
                <p>My current project is a Mini Essay web app to encourage better learning using the Feynman technique.</p>
                <p>(That's where you learn through teaching. In this case, through a short typed format)</p>
                <br></br>
                <img src={webdev_img}></img>
            </section>
        </main>
    )
}

export default About
