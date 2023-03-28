import './Terminal.css';
import { Link } from "react-scroll";
import { useState, Component } from "react";

class Terminal extends Component {
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
