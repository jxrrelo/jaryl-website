import './Home.css';
import { Component } from "react";
import Terminal from '../../components/terminal/Terminal';
import Introduction from '../../components/introduction/Introduction';
import About from '../../pages/about/About';
import Experience from '../../pages/experience/Experience';
import Projects from '../../pages/projects/Projects';
import Contact from '../../pages/contact/Contact';
import ProfilePhoto from '../../components/profile_photo/ProfilePhoto';

class Home extends Component {
    render() {
        return (
            <div id="app" className="App">
                <section id="home">
                    <div className="home-content">
                        <div className="home-content-left">
                            <Introduction />
                            <Terminal />
                        </div>
                        <div className="home-content-right">
                        <div className="home-display-picture">
                            <img
                                src={require('../../images/landing-dp2.png')}
                                style={{
                                    borderRadius: "5%",
                                    width: 405,
                                    height: 550,
                                }}
                            />
                        </div>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <p className="section-header">
                        About
                    </p>
                    <div className="about-content">
                        <ProfilePhoto />
                        <About />
                    </div>
                </section>
                <section id="experience">
                    <p className="section-header">
                        Experience
                    </p>
                    <Experience />
                </section>
                <section id="projects">
                    <p className="section-header">
                        Projects
                    </p>
                    <Projects />
                </section>
                <section id="contact">
                    <p className="section-header">
                        Contact
                    </p>
                    <div className="about-content">
                        <Contact />
                    </div>
                </section>  
            </div>   
        );
    }
}

export default Home;