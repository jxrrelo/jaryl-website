import './Navbar.css';
import { Link } from "react-scroll";
import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
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
                        <Link to="/posts">
                            Posts
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
        );
    }
    
}

export default Navbar;
