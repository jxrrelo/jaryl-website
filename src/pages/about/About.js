import './About.css';
import { Component } from "react";

class About extends Component {
    render() {
        return (
            <div className="about-me-container">
                <div className="about-me-description">
                    Hello! My name is Jaryl and I enjoy meddling with things that live on the internet.
                    <br /><br />
                    My interest in software development started back in 2017
                    when I was first introduced to the basics of programming.
                    The satisfaction from a well-developed product along with
                    the thrill of breaking insecure programs were the motivations
                    that have kept me going ever since.
                    <br /><br />
                    Outside of work, you may occasionally find me playing football, climbing and traveling! :)
                </div>
                <div>
                    <button className="resume-button">Check out my resume!</button>
                </div>
            </div>

            
         
        );
    }
}

export default About;