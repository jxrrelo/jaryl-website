import './App.css';
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <header className="nav-bar">
        <nav className="nav-container-actions">
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
          <p className="intro">Hi, my name is</p>
          <p className="name">Jaryl Loh.</p>
          <p className="motto">Building and securing is my passion.</p>
          <p className="whoami">I am a software/security engineer based in Singapore,</p>
          <p className="whoami">focusing in application development and security.</p>
        </div>
      </section>
      <section id="about"><p className="section-header">About</p></section>
      <section id="experience"><p className="section-header">Experience</p></section>
      <section id="projects"><p className="section-header">Projects</p></section>
      <section id="contact"><p className="section-header">Contact</p></section>
    </div>
  );
}

export default App;
