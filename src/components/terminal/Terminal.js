import './Terminal.css';
import { Link } from "react-scroll";
import { useState, Component } from "react";

class Terminal extends Component {
    callme() {
        let userInput, terminalOutput;

        const app = () => {
        window.userInput = document.getElementById("userInput");
        terminalOutput = document.getElementById("terminalOutput");
        document.getElementById("dummyKeyboard").focus();
        };

        const execute = function executeCommand(input) {
        let output;
        input = input.toLowerCase();

        if (input.length === 0) {
            return;
        }

        // Another "Secret" command
        if (input === "sudo rm -rf") {
            whooops();
        }

        output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
        if (!COMMANDS.hasOwnProperty(input)) {
            output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
        } else {
            output += `<div class="output"> ${COMMANDS[input]} </div>`;
        }

        terminalOutput.innerHTML = `${
            terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        };

        const key = function keyEvent(e) {
        userInput = document.getElementById("userInput");
        const input = window.userInput.innerHTML;

        if (e.key === "Enter") {
            execute(input);
            userInput.innerHTML = "";
            return;
        }

        userInput.innerHTML = input + e.key;
        };

        const backspace = function backSpaceKeyEvent(e) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
            return;
        }
        userInput.innerHTML = userInput.innerHTML.slice(
            0,
            userInput.innerHTML.length - 1
        );
        };

        document.addEventListener("keydown", backspace);
        document.addEventListener("keypress", key);
        if (document.readyState !== "loading") {
        app();
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
    }

    render() {
        return (
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
        );
    }
}

export default Terminal;
