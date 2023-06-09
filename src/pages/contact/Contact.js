import './Contact.css';
import { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-email">
                    jarylloh1997@gmail.com
                </div>
                <div className="social-media-links">
                    <div className="github-link">
                        <a href="https://www.github.com/jxrrelo">Github</a>
                    </div>
                    <div className="linkedin-link">
                        <a className="linkedin-link" href="https://www.github.com/jxrrelo">Linkedin</a>
                    </div>
                </div>
                <div className="contact-thankyou-msg">
                    Thanks for visiting! :)
                </div>
            </div>
        );
    }
}

export default Contact;