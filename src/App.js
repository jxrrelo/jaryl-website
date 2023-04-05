import './App.css';
import Terminal from './components/terminal/Terminal';
import Introduction from './components/introduction/Introduction';
import About from './pages/about/About';
import ProfilePhoto from './components/profile_photo/ProfilePhoto';
import { Link } from "react-scroll";
import { useState, Component } from "react";

class App extends Component {
  render() {
    return (
      <div id="app" className="App">
        <header className="nav-bar">
          <nav className="nav-container-actions-left">
            <ul>
              <li>
                <Link to="app" onClick={() => window.location.reload()}>
                    J
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="nav-container-actions-right">
            <ul>
              <li>
                <Link activeClass="active" smooth spy to="about">
                    About
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="experience">
                    Experience
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="projects">
                    Projects
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact">
                    Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <section id="home">
          <div className="home-content">
            <div className="home-content-left">
              <Introduction />
              <Terminal />
            </div>
            <div className="home-content-right">
              <div className="home-display-picture">
                <img
                    src={require('./landing-dp2.png')}
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
        </section>
        <section id="projects">
          <p className="section-header">
            Projects
          </p>
        </section>
        <section id="contact">
          <p className="section-header">
            Contact
          </p>
        </section>
      </div>
    );
  }
  
}

export default App;
