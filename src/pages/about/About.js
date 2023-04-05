import './About.css';
import { Component } from "react";

class About extends Component {
    render() {
        return (
            <div className="about-me-container">
                <div className="about-me-description">
                    Hello! My name is Jaryl and I enjoy meddling with things that live on the internet. My interest in software development and cybersecurity.
                    Outside of work, you may occasionally find me playing football, climbing and traveling.
                </div>
                <div>
                    <button className="resume-button">Check out my resume!</button>
                </div>
            </div>

            
         
        );
    }
}

export default About;