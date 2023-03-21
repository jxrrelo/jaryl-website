import './App.css';
import { Link } from "react-scroll";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

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
          <div className="introduction">
            <div className="intro-phrase">Hi, my name is</div>
            <div className="name">Jaryl Loh.</div>
            <div className="motto">Building and securing is my passion.</div>
            <div className="whoami">I am a software/security engineer based in Singapore,</div>
            <div className="whoami">focusing in application development and security.</div>
          </div>
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-flex">
                  <div class="column-child terminal shadow">
                    <div class="terminal-bar dark-mode">
                      <div class="icon-btn close"></div>
                      <div class="icon-btn min"></div>
                      <div class="icon-btn max"></div>
                      <div class="terminal-bar-text is-hidden-mobile dark-mode-text">
                        guest@jaryl's: ~
                      </div>
                    </div>
                    <div
                      class="terminal-window primary-bg"
                      onclick="document.getElementById('dummyKeyboard').focus();"
                    >
                      <div class="terminal-output" id="terminalOutput">
                        <div class="terminal-line">
                          <span class="help-msg"
                            >Welcome to my portfolio! — Type
                            <span class="code"> help</span> for a list of supported
                            commands.</span
                          >
                        </div>
                      </div>
                      <div class="terminal-line">
                        <span class="success">➜</span>
                        <span class="directory"> ~</span>
                        <span class="user-input" id="userInput"></span>
                        <input
                          type="text"
                          id="dummyKeyboard"
                          class="dummy-keyboard"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section-header">
          About
        </p>
      </section>
      <section id="experience"><p className="section-header">Experience</p></section>
      <section id="projects"><p className="section-header">Projects</p></section>
      <section id="contact"><p className="section-header">Contact</p></section>
    </div>
  );
}

const whooops = () => {
  document.body.querySelector(".hero").remove();
  document.body.style.background = "#000";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
};

const COMMANDS = {
  help:
    'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]',
  about:
    "Hello 👋<br>I'm Twan Mulder. I’m a 23 yr old web developer currently living in the Netherlands. I have a burning passion to want and help others with code that I create. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better developer.",
  skills:
    '<span class="code">Languages:</span> HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, REST API\'s<br><span class="code">Frameworks:</span> React.js, Redux, GSAP, Sass, Vue.js',
  education:
    "B.Sc. Interactive Media & Technologies - Hanze University of Applied Sciences, Groningen",
  experience:
    "I'm currently working as a front-end developer at Storm Digital. My main areas of focus are helping our creative team build succesful digital creatives, and developing A/B tests for our CRO team.",
  contact:
    'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/twanmulder" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@toktoktwan" class="social link">Medium</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/toktoktwan/" class="social link">Twitter</a>"]',
  bob: "<span style='font-size: 2rem;'>🐕</span>",
  party: "🎉🎉🎉",
  beer:
    '["<a target="_blank" rel="noopener noreferrer" href="https://anytimers.netlify.com" class="social link">Anytimers!</a>"]',
  "sudo rm -rf": ""
};

export default App;
