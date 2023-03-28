import './Introduction.css';
import { Link } from "react-scroll";
import { useState, Component } from "react";

class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
              <div className="intro-phrase">Hi, my name is</div>
              <div className="name">Jaryl Loh.</div>
              <div className="motto">Building and securing is my passion.</div>
              <div className="whoami">I am a software/security engineer based in Singapore,</div>
              <div className="whoami">focusing in application development and security.</div>
            </div>
        );
    }
    
}

export default Introduction;
