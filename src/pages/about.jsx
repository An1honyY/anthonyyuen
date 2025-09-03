import './about.css'
import email_img from '../assets/email-send.svg'
import diploma_img from '../assets/diploma.svg'
import grad_img from '../assets/grad.svg'
import java_img from '../assets/java.svg'
import python_img from '../assets/python.svg'
import php_img from '../assets/php.svg'
import react_img from '../assets/react.svg'
import mysql_img from '../assets/mysql.svg'
import mongodb_img from '../assets/mongodb.svg'
import shears_img from '../assets/shears.svg'
import violin_img from '../assets/violin.svg'
import group_img from '../assets/group.svg'
import webdev_img from '../assets/webdev.svg'
import auckland_img from '../assets/auckland2.webp'
import car_img from '../assets/car.svg'

function About() {
    return (
        <main>
            <h1 className="about-title">
                About
            </h1>
            <br></br>
            <section className="about-card">
                <h3>Who am I?</h3>
                <p>I'm a motivated job seeker with an academic background in IT.</p>
                <p>Roles I'd be best fit for are Helpdesk Support and Software Developer.</p> 
                <br></br>
                <p>However, I'm interested in any entry-level job offers.</p> 
                <p>I'm based in West Auckland, with a Restricted Drivers License.</p>
                <img src={auckland_img} style={{width: '8rem'}}></img>
                <img src={car_img}></img>
                <br></br>
                <br></br>

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
                <p>I also learnt concepts such as the ITIL framework for services, needs analysis and security management.</p>
                <br></br>
                <img src={java_img}></img>
                <img src={python_img}></img>
                <img src={php_img}></img>
                <img src={react_img}></img>
                <img src={mysql_img}></img>
                <img src={mongodb_img}></img>
                <br></br>
                <br></br>
                <p>My studies involved practical team-based projects which developed my Problem Solving, Communication and Teamwork skills.</p>
                <p>Past job experience includes part-time gardening and violin tutoring, which taught me how to work independently and creatively.</p>
                <br></br>
                <img src={group_img}></img>
                <img src={shears_img}></img>
                <img src={violin_img}></img>
                <br></br>
                <br></br>
                <p>At the moment I'm doing an IT Sales Internship, reaching out to businesses interested in IT support.</p>
                <p>I've sent out a couple hundred emails and have clicked through hundreds of business websites.</p>
                <img src={email_img}></img>
                <br></br>
                <p>My current project is a Mini Essay web app to encourage better learning using the Feynman technique.</p>
                <p>It uses React with Typescript, the DaisyUI component library, a WYSIWYG text editor called BlockNote, and MongoDB as the backend.</p>
                <br></br>
                <img src={webdev_img}></img>
            </section>
        </main>
    )
}

export default About
